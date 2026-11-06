#!/usr/bin/env python3
"""Validate a single review against production HTML, not completion flags alone."""
import json
import pathlib
import re
import sys
from html.parser import HTMLParser

from PIL import Image


def validate_image(asset):
    formats = {'.png': 'PNG', '.jpg': 'JPEG', '.jpeg': 'JPEG', '.webp': 'WEBP'}
    assert asset.suffix.lower() in formats, 'Image must be a static PNG, JPEG, or WebP asset'
    with Image.open(asset) as image:
        assert image.format == formats[asset.suffix.lower()], 'Image encoding must match its extension'
        assert getattr(image, 'n_frames', 1) == 1, 'Image must be static'
        image.load()


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.visuals = []
        self.links = set()
        self.unformatted_commands = []
        self.code = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get('class', '').split()
        visual = 'feature-highlight-visual' in classes
        if visual:
            self.visuals.append([])
        inside = visual or any(v for _, v in self.stack)
        if inside:
            self.visuals[-1].append((tag, attrs))
        if tag == 'a':
            self.links.add(attrs.get('href', ''))
        if tag not in {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}:
            self.stack.append((tag, visual))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        tags = {tag for tag, _ in self.stack}
        if tags & {'script', 'style'}:
            return
        if 'code' in tags:
            self.code.append(data)
        elif re.search(r'\bwp\s+fifu(?:\b|-)', data):
            self.unformatted_commands.append(data.strip())


def validate(report, project, feature):
    # Image/styling flags cover delivery and source/CSS implementation only.
    # Visual quality and rendered appearance are reviewed manually by the user.
    assert report.get('feature') == feature, 'Review returned a different feature'
    assert report.get('status') == 'complete', report.get('summary', 'Review incomplete')
    for check in ('source_review', 'documentation', 'technical_formatting', 'related_links', 'styling', 'image', 'route_and_build'):
        assert report.get('checks', {}).get(check) is True, f'Incomplete check: {check}'
    assert report.get('evidence'), 'Missing source evidence'
    root = pathlib.Path(project).resolve()
    route = report['route']
    assert re.fullmatch(r'/features/[a-z0-9-]+/', route), 'Invalid dedicated route'
    public = root / 'frontend/public'
    files = report['image_files']
    assert isinstance(files, list) and len(files) == 1, 'Expected exactly one reported image'
    assets = [(root / file).resolve() for file in files]
    for asset in assets:
        assert asset.is_relative_to(public), 'Image must be a public site asset'
        validate_image(asset)
    output = root / 'frontend/build/client'
    html = (output / route.strip('/') / 'index.html').read_text()
    page = Page()
    page.feed(html)
    assert len(page.visuals) == 1, 'Expected exactly one feature highlight visual'
    nodes = page.visuals[0]
    assert all(tag in {'picture', 'source', 'img'} for tag, _ in nodes[1:]), 'Coded illustration remains in highlight'
    images = [attrs for tag, attrs in nodes if tag == 'img']
    assert len(images) == len(assets), 'Highlight must render exactly the reported image count'
    for image, asset in zip(images, assets):
        assert image.get('src') == '/' + asset.relative_to(public).as_posix(), 'Reported image is not embedded in highlight in display order'
        assert image.get('alt', '').strip(), 'Missing image alt text'
        built_asset = output / asset.relative_to(public)
        assert built_asset.read_bytes() == asset.read_bytes(), 'Built image missing or stale'
    assert not page.unformatted_commands, f'WP-CLI commands outside code: {page.unformatted_commands}'
    decisions = report['related_guides']
    for decision in decisions:
        assert decision['reason'].strip(), 'Missing related guide decision reason'
        if decision['route']:
            dest = decision['route']
            assert re.fullmatch(r'/features/[a-z0-9-]+/', dest), 'Invalid related route'
            assert (output / dest.strip('/') / 'index.html').is_file(), f'Related route not built: {dest}'
            assert dest in page.links, f'Missing contextual link: {dest}'
    assert '/features/' in page.links, 'Missing next-step link'
    sitemap = (public / 'sitemap.xml').read_text()
    assert route in sitemap, 'Missing sitemap entry'


if __name__ == '__main__':
    try:
        validate(json.loads(pathlib.Path(sys.argv[1]).read_text()), sys.argv[2], sys.argv[3])
    except (AssertionError, OSError, ValueError, KeyError, TypeError, AttributeError, EOFError) as error:
        sys.exit(f'Review validation failed: {error}')

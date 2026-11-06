"""Focused regressions for the guide runner's completion gates."""
import copy
import importlib.util
import pathlib
import tempfile
import unittest

from PIL import Image

spec = importlib.util.spec_from_file_location('validator', pathlib.Path(__file__).with_name('validate-feature-guide.py'))
validator = importlib.util.module_from_spec(spec)
spec.loader.exec_module(validator)


class ValidationTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = pathlib.Path(self.tmp.name)
        public = self.root / 'frontend/public'
        public.mkdir(parents=True)
        self.asset = public / 'guide.png'
        self.write_image()
        self.route = '/features/example-feature/'
        (public / 'sitemap.xml').write_text(self.route)
        self.html_file = self.root / 'frontend/build/client' / self.route.strip('/') / 'index.html'
        self.html_file.parent.mkdir(parents=True)
        (self.root / 'frontend/build/client/guide.png').write_bytes((public / 'guide.png').read_bytes())
        dest = self.root / 'frontend/build/client/features/related-feature/index.html'
        dest.parent.mkdir(parents=True)
        dest.write_text('upload')
        self.html = '<div class="feature-highlight-visual"><img src="/guide.png" alt="Link images"></div><p><code>wp fifu example</code></p><a href="/features/related-feature/">Related Feature</a><a href="/features/">Features</a>'
        self.report = dict(feature='Example Feature', status='complete', route=self.route, image_files=['frontend/public/guide.png'], evidence=['source.php:1'], checks={key: True for key in ('source_review', 'documentation', 'technical_formatting', 'related_links', 'styling', 'image', 'route_and_build')}, related_guides=[dict(feature='Related Feature', route='/features/related-feature/', reason='Next workflow step')])

    def write_image(self):
        Image.new('RGB', (8, 8), 'navy').save(self.asset)

    def add_images(self, count):
        for index in range(2, count + 1):
            name = f'guide-{index}.png'
            asset = self.asset.with_name(name)
            Image.new('RGB', (8, 8), 'blue').save(asset)
            (self.root / 'frontend/build/client' / name).write_bytes(asset.read_bytes())
            self.report['image_files'].append(f'frontend/public/{name}')
            self.html = self.html.replace('</div>', f'<img src="/{name}" alt="Workflow step {index}"></div>', 1)

    def test_rejects_two_images(self):
        self.add_images(2)
        with self.assertRaisesRegex(AssertionError, 'exactly one'):
            self.check()

    def test_rejects_three_images(self):
        self.add_images(3)
        with self.assertRaisesRegex(AssertionError, 'exactly one'):
            self.check()

    def test_rejects_four_images(self):
        self.add_images(4)
        with self.assertRaisesRegex(AssertionError, 'exactly one'):
            self.check()

    def test_rejects_no_images(self):
        self.report['image_files'] = []
        with self.assertRaisesRegex(AssertionError, 'exactly one'):
            self.check()

    def test_rejects_duplicate_assets(self):
        self.report['image_files'] *= 2
        with self.assertRaisesRegex(AssertionError, 'exactly one'):
            self.check()

    def test_rejects_animated_png(self):
        frames = [Image.new('RGB', (8, 8), color) for color in ('navy', 'blue')]
        frames[0].save(self.asset, save_all=True, append_images=frames[1:], duration=120, loop=0)
        with self.assertRaisesRegex(AssertionError, 'must be static'):
            self.check()

    def test_rejects_gif(self):
        self.report['image_files'] = ['frontend/public/guide.gif']
        with self.assertRaisesRegex(AssertionError, 'static PNG'):
            self.check()

    def test_rejects_gif_renamed_to_png(self):
        Image.new('RGB', (8, 8), 'navy').save(self.asset, format='GIF')
        with self.assertRaisesRegex(AssertionError, 'encoding must match'):
            self.check()

    def test_rejects_missing_alt_text(self):
        with self.assertRaisesRegex(AssertionError, 'alt text'):
            self.check(self.html.replace('alt="Link images"', 'alt=""'))

    def test_rejects_unreported_image(self):
        self.add_images(2)
        self.report['image_files'].pop()
        with self.assertRaisesRegex(AssertionError, 'image count'):
            self.check()

    def check(self, html=None, report=None):
        self.html_file.write_text(self.html if html is None else html)
        validator.validate(self.report if report is None else report, self.root, self.report['feature'])

    def test_accepts_embedded_image_and_contextual_link(self):
        self.check()

    def test_accepts_pending_manual_visual_review(self):
        report = copy.deepcopy(self.report)
        report['summary'] = 'Image quality and rendered-page visual review are pending manual review by the user'
        self.check(report=report)

    def test_manual_review_does_not_bypass_failed_delivery(self):
        report = copy.deepcopy(self.report)
        report['summary'] = 'Visual review is pending, but image generation failed'
        report['checks']['image'] = False
        with self.assertRaisesRegex(AssertionError, 'Incomplete check: image'):
            self.check(report=report)

    def test_rejects_coded_visual_even_when_asset_exists(self):
        with self.assertRaisesRegex(AssertionError, 'Coded illustration'):
            self.check(self.html.replace('<img src="/guide.png" alt="Link images">', '<svg></svg>'))

    def test_rejects_extra_css_drawing_beside_image(self):
        with self.assertRaisesRegex(AssertionError, 'Coded illustration'):
            self.check(self.html.replace('<img ', '<div class="drawing"></div><img '))

    def test_rejects_stale_built_asset(self):
        (self.root / 'frontend/build/client/guide.png').write_bytes(b'stale')
        with self.assertRaisesRegex(AssertionError, 'stale'):
            self.check()

    def test_rejects_asset_not_embedded(self):
        with self.assertRaisesRegex(AssertionError, 'not embedded'):
            self.check(self.html.replace('src="/guide.png"', 'src="/other.png"'))

    def test_rejects_plain_command(self):
        with self.assertRaisesRegex(AssertionError, 'outside code'):
            self.check(self.html.replace('<code>wp fifu example</code>', 'wp fifu example'))

    def test_accepts_feature_without_related_guides(self):
        report = copy.deepcopy(self.report)
        report['related_guides'] = []
        self.check(self.html.replace('<a href="/features/related-feature/">Related Feature</a>', ''), report)

    def test_rejects_missing_reported_link(self):
        with self.assertRaisesRegex(AssertionError, 'Missing contextual link'):
            self.check(self.html.replace('href="/features/related-feature/"', 'href="/features/"'))

    def test_rejects_missing_rendered_route(self):
        self.html_file.unlink(missing_ok=True)
        with self.assertRaises(OSError):
            validator.validate(self.report, self.root, self.report['feature'])


if __name__ == '__main__':
    unittest.main()

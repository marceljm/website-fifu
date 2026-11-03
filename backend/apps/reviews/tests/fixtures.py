"""Build synthetic WordPress.org pages from the real captured HTML.

The listing and topic fixtures are genuine pages saved from wordpress.org.
These helpers clone their markup while swapping the variable parts (topic
rows, usernames, titles, dates, paragraphs, pagination) so tests exercise the
real structure with controlled content.
"""

from __future__ import annotations

import copy
from pathlib import Path

from bs4 import BeautifulSoup

HTML_DIR = Path(__file__).resolve().parent / "html"
REVIEWS_URL = "https://wordpress.org/support/plugin/featured-image-from-url/reviews/"


def read_fixture(name: str) -> str:
    return (HTML_DIR / name).read_text(encoding="utf-8")


def listing_url(page: int) -> str:
    return f"{REVIEWS_URL}?filter=5" if page == 1 else f"{REVIEWS_URL}page/{page}/?filter=5"


def topic_url(slug: str) -> str:
    return f"https://wordpress.org/support/topic/{slug}/"


def make_listing(
    topics: list[dict],
    *,
    page: int = 1,
    last_page: int = 1,
    total_five_star: int | None = None,
) -> str:
    """Return listing HTML with the given topic rows and pagination.

    Each topic dict: slug, title, author, and optionally topic_id, rating
    (aria-label) and freshness.
    """
    soup = BeautifulSoup(read_fixture("listing-page-1.html"), "html.parser")
    rows = soup.select("li.bbp-body ul[id^=bbp-topic-]")
    template = copy.copy(rows[0])
    body = rows[0].parent
    for row in rows:
        row.decompose()
    for index, topic in enumerate(topics):
        row = copy.copy(template)
        topic_id = topic.get("topic_id", 90000 + index)
        row["id"] = f"bbp-topic-{topic_id}"
        link = row.select_one("a.bbp-topic-permalink")
        link["href"] = topic_url(topic["slug"])
        # Replace the text node only; keep the rating <div> intact.
        for node in list(link.children):
            if isinstance(node, str):
                node.extract()
        link.insert(0, topic["title"] + " ")
        row.select_one(".wporg-ratings")["aria-label"] = topic.get("rating", "5 out of 5 stars")
        author = row.select_one(".bbp-topic-started-by .bbp-author-name")
        author.string = topic["author"]
        fresh = row.select_one(".bbp-topic-freshness a")
        fresh.string = topic.get("freshness", "2 months ago")
        fresh["href"] = topic_url(topic["slug"]) + "#post-1"
        body.append(row)

    if total_five_star is not None:
        bar = soup.select_one('.wporg-ratings-bars__bar a[href*="filter=5"]')
        bar.select_one(".wporg-ratings-bars__bar-count").string = str(total_five_star)
        bar.select_one(".screen-reader-text").string = f"{total_five_star} 5-star reviews"

    for pagination in soup.select(".bbp-pagination-links"):
        pagination.clear()
        for number in range(1, last_page + 1):
            if number == page:
                current = soup.new_tag("span", attrs={"class": "page-numbers current"})
                current.string = str(number)
                pagination.append(current)
            else:
                anchor = soup.new_tag(
                    "a", attrs={"class": "page-numbers", "href": listing_url(number)}
                )
                anchor.string = str(number)
                pagination.append(anchor)
    return str(soup)


def make_topic(
    *,
    slug: str,
    title: str,
    username: str,
    paragraphs: list[str],
    relative_date: str = "2 months ago",
    absolute_date: str = "August 27, 2026 at 9:05 pm",
    display_name: str | None = None,
    rating: str = "5 out of 5 stars",
    with_reply: bool = True,
) -> str:
    """Return topic HTML whose lead post carries the given review."""
    soup = BeautifulSoup(read_fixture("topic-plugin-fifu-muy-util.html"), "html.parser")
    soup.select_one("h1.page-title").string = title
    soup.select_one(".wporg-ratings")["aria-label"] = rating
    lead = soup.select_one("li.bbp-body div.type-topic")
    lead.select_one(".bbp-author-name").string = display_name or username
    lead.select_one(".bbp-user-nicename").string = f"(@{username})"
    lead.select_one(".bbp-author-link")["href"] = f"https://wordpress.org/support/users/{username}/"
    date_link = lead.select_one(".bbp-topic-post-date a")
    date_link.string = relative_date
    date_link["title"] = absolute_date
    date_link["href"] = topic_url(slug)
    content = lead.select_one(".bbp-topic-content")
    content.clear()
    for text in paragraphs:
        paragraph = soup.new_tag("p", attrs={"class": "wp-block-paragraph"})
        paragraph.string = text
        content.append(paragraph)
    if not with_reply:
        for reply in soup.select("li.bbp-body div.type-reply"):
            reply.decompose()
    return str(soup)


def make_site(
    reviews: list[dict], *, per_page: int = 3, total_five_star: int | None = None
) -> dict[str, str]:
    """Return a url -> html mapping for a fake wordpress.org with these reviews.

    Each review dict: slug, title, username, paragraphs, and optional
    relative_date, absolute_date, rating, author (listing display name).
    """
    pages = [reviews[i : i + per_page] for i in range(0, len(reviews), per_page)] or [[]]
    site: dict[str, str] = {}
    for number, chunk in enumerate(pages, start=1):
        site[listing_url(number)] = make_listing(
            [
                {
                    "slug": r["slug"],
                    "title": r["title"],
                    "author": r.get("author", r["username"]),
                    "rating": r.get("rating", "5 out of 5 stars"),
                }
                for r in chunk
            ],
            page=number,
            last_page=len(pages),
            total_five_star=len(reviews) if total_five_star is None else total_five_star,
        )
    for r in reviews:
        site[topic_url(r["slug"])] = make_topic(
            slug=r["slug"],
            title=r["title"],
            username=r["username"],
            paragraphs=r["paragraphs"],
            relative_date=r.get("relative_date", "2 months ago"),
            absolute_date=r.get("absolute_date", "August 27, 2026 at 9:05 pm"),
            rating=r.get("rating", "5 out of 5 stars"),
        )
    return site


SAMPLE_REVIEWS = [
    {
        "slug": "plugin-fifu-muy-util",
        "title": "plugin FIFU muy útil",
        "username": "newscaribe",
        "paragraphs": ["Me parece un plugin muy útil.", "Tengo una duda."],
        "relative_date": "2 months ago",
        "absolute_date": "August 27, 2026 at 9:05 pm",
    },
    {
        "slug": "great-support",
        "title": "Great support",
        "username": "alice",
        "paragraphs": ["Fast and friendly support."],
        "relative_date": "8 months, 2 weeks ago",
        "absolute_date": "February 14, 2026 at 10:00 am",
    },
    {
        "slug": "works-perfectly",
        "title": "Works perfectly",
        "username": "bob_77",
        "paragraphs": ["It just works."],
        "relative_date": "1 year, 1 month ago",
        "absolute_date": "September 30, 2025 at 3:15 pm",
    },
    {
        "slug": "excellent-plugin",
        "title": "Excellent plugin",
        "username": "carol",
        "paragraphs": ["Saves me hours every week."],
        "relative_date": "2 years, 5 months ago",
        "absolute_date": "May 20, 2024 at 8:45 pm",
    },
    {
        "slug": "muito-bom",
        "title": "Muito bom",
        "username": "daniel-br",
        "paragraphs": ["Plugin excelente, recomendo."],
        "relative_date": "5 years, 4 months ago",
        "absolute_date": "June 1, 2021 at 11:30 pm",
    },
    {
        "slug": "five-stars",
        "title": "Five stars",
        "username": "eve",
        "paragraphs": ["Exactly what I needed."],
        "relative_date": "3 weeks, 2 days ago",
        "absolute_date": "October 8, 2026 at 1:00 am",
    },
    {
        "slug": "thank-you",
        "title": "Thank you",
        "username": "frank",
        "paragraphs": ["Thanks for this free plugin."],
        "relative_date": "5 days ago",
        "absolute_date": "October 27, 2026 at 6:20 pm",
    },
]

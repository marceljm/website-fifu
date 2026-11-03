"""Five-star WordPress.org reviews for FIFU, stored with polished text only."""

import hashlib

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.db.models import Q
from django.utils import timezone


def hash_username(username: str) -> str:
    """Return the SHA-256 hex digest of a normalised WordPress.org username.

    Accepts "newscaribe", "@newscaribe" or "(@newscaribe)" as shown on the
    support forum and normalises them to the same hash. No salt is used: the
    username is already public on WordPress.org.
    """
    normalised = username.strip().strip("()").lstrip("@").strip().lower()
    if not normalised:
        raise ValueError("Username must not be empty")
    return hashlib.sha256(normalised.encode("utf-8")).hexdigest()


class ReviewQuerySet(models.QuerySet):
    def positive(self):
        """Reviews that may be displayed on the website."""
        return self.filter(sentiment=Review.POSITIVE)


class Review(models.Model):
    POSITIVE, NEGATIVE, NEUTRAL = "positive", "negative", "neutral"
    SENTIMENTS = [(POSITIVE, "Positive"), (NEGATIVE, "Negative"), (NEUTRAL, "Neutral")]

    objects = ReviewQuerySet.as_manager()

    username_hash = models.CharField(
        max_length=64,
        unique=True,
        help_text="SHA-256 of the WordPress.org @username; the username itself is never stored.",
    )
    fictional_name = models.CharField(max_length=80)
    title = models.CharField(max_length=200, help_text="Polished English title.")
    comment = models.TextField(
        help_text="Polished English comment; paragraphs separated by blank lines."
    )
    quality_score = models.PositiveSmallIntegerField(
        default=5,
        validators=[MinValueValidator(0), MaxValueValidator(10)],
        help_text="Editorial quality score from 0 (low) to 10 (excellent).",
    )
    weeks = models.PositiveIntegerField(
        help_text="Age of the review in weeks when scraped (1 month = 4 weeks, 1 year = 48 weeks)."
    )
    posted_at = models.DateTimeField(
        null=True, blank=True, help_text="Absolute post date shown on WordPress.org."
    )
    source_order = models.PositiveIntegerField(
        default=0, help_text="Position in the WordPress.org listing (0 = newest)."
    )
    scraped_at = models.DateTimeField(
        default=timezone.now,
        help_text="When the review was scraped from WordPress.org (set by the import).",
    )
    sentiment = models.CharField(
        max_length=8,
        choices=SENTIMENTS,
        help_text="Only positive reviews are exported to the website.",
    )

    class Meta:
        ordering = ["-quality_score", "source_order"]
        constraints = [
            models.CheckConstraint(condition=Q(weeks__gte=0), name="review_weeks_non_negative"),
            models.CheckConstraint(
                condition=Q(quality_score__gte=0) & Q(quality_score__lte=10),
                name="review_quality_score_0_10",
            ),
            models.CheckConstraint(
                condition=Q(sentiment__in=["positive", "negative", "neutral"]),
                name="review_sentiment_valid",
            ),
        ]

    def __str__(self):
        return f"{self.fictional_name}: {self.title}"

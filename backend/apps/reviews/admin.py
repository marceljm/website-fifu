from django.contrib import admin

from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        "fictional_name",
        "title",
        "sentiment",
        "quality_score",
        "weeks",
        "posted_at",
        "scraped_at",
    )
    list_filter = ("sentiment", "scraped_at")
    search_fields = ("fictional_name", "title", "comment")
    ordering = ("-quality_score", "source_order")
    readonly_fields = ("username_hash", "scraped_at")

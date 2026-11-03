from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reviews", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="review",
            name="sentiment",
            field=models.CharField(
                choices=[("positive", "Positive"), ("negative", "Negative"), ("neutral", "Neutral")],
                default="neutral",  # one-off value for rows that pre-date the column; never displayed
                help_text="Only positive reviews are exported to the website.",
                max_length=8,
            ),
            preserve_default=False,
        ),
        migrations.AddConstraint(
            model_name="review",
            constraint=models.CheckConstraint(
                condition=models.Q(("sentiment__in", ["positive", "negative", "neutral"])),
                name="review_sentiment_valid",
            ),
        ),
    ]

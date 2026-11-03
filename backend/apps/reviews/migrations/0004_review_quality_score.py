from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import migrations, models
from django.db.models import Q


class Migration(migrations.Migration):

    dependencies = [
        ("reviews", "0003_review_scraped_at_default"),
    ]

    operations = [
        migrations.AddField(
            model_name="review",
            name="quality_score",
            field=models.PositiveSmallIntegerField(
                default=5,
                help_text="Editorial quality score from 0 (low) to 10 (excellent).",
                validators=[MinValueValidator(0), MaxValueValidator(10)],
            ),
        ),
        migrations.AddConstraint(
            model_name="review",
            constraint=models.CheckConstraint(
                condition=Q(quality_score__gte=0) & Q(quality_score__lte=10),
                name="review_quality_score_0_10",
            ),
        ),
    ]

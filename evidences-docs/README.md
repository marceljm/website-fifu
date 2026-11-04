# Test evidence — FIFU documentation

Results of every frontend and backend check, run on 2026-11-04 13:22 UTC after the documentation work and the fixes for the two reviews tests that were failing before it. Each `.txt` file starts with the exact command and ends with its exit code.

## Results

| Check | Command | Result | File |
| --- | --- | --- | --- |
| Backend tests (Django) | `python manage.py test -v 2` (from `backend/`) | 183 tests, all pass (1 skipped: needs the raw scrape file, which is never committed) | [backend-tests.txt](backend-tests.txt) |
| Backend migrations up to date | `python manage.py makemigrations --check --dry-run` | No changes detected | [backend-migrations.txt](backend-migrations.txt) |
| Frontend type check | `npx tsc --noEmit` (from `frontend/`) | No errors | [frontend-typecheck.txt](frontend-typecheck.txt) |
| Frontend formatting | `npm run format:check` | All files use Prettier style | [frontend-format-check.txt](frontend-format-check.txt) |
| Frontend unit tests | `npm run test:unit` | 44 tests, all pass | [frontend-unit-tests.txt](frontend-unit-tests.txt) |
| Frontend production build | `npm run build` | Built and pre-rendered, including `/docs/` and the 32 guides | [frontend-build.txt](frontend-build.txt) |
| Frontend end-to-end tests | `npm run test:e2e` (on the build above) | 32 tests, all pass | [frontend-e2e-tests.txt](frontend-e2e-tests.txt) |

## Screenshots (production build)

- [docs-catalog-desktop.png](docs-catalog-desktop.png) and [docs-catalog-mobile.png](docs-catalog-mobile.png): the `/docs/` page with every card, icon, and reading time.
- [guide-default-featured-image-desktop.png](guide-default-featured-image-desktop.png) and [guide-default-featured-image-mobile.png](guide-default-featured-image-mobile.png): a full guide with its illustration.
- [guide-wp-cli-desktop.png](guide-wp-cli-desktop.png): a guide with command tables and code blocks.

## Fixes made before this run

These tests were failing before the documentation work and were not part of it:

- `test_migrations_are_up_to_date`: the review sort order (highest quality score first, then WordPress.org order) had no migration. Added `backend/apps/reviews/migrations/0005_review_quality_ordering.py`. It only records the ordering; no database columns change.
- `test_positive_manager_filters_displayable_reviews`: the test still expected the old order (fewest weeks first). It now checks the filter under the current order documented in the README.
- Prettier warnings in `frontend/app/routes/home.tsx` and `frontend/app/routes/reviews.tsx`: reformatted (line wrapping only, no visible change).

## Environment

- Node.js v22.21.0, npm 10.9.4, React Router 7.18.4
- Python 3.12.3, Django 5.2.18, Django REST Framework 3.16.1
- Dependencies installed from `frontend/package-lock.json` (`npm ci`) and `backend/requirements.txt` into `.venv`.

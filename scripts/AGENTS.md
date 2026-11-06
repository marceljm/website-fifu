# Scripts working rules

- Never run a full unit or integration test suite. Run only tests directly relevant to the changed file, module, case, or explicit filter. If focused checks are insufficient, report the limitation instead of expanding to a full suite.
- Temporary debugging logs may be created, read, and removed under `/tmp`. Remove temporary log-writing code from the repository when debugging is complete.
- Keep feature-guide design and editorial requirements in `feature-guide-style.md`, the single shared reference for every feature card. Apply improvements there in general terms rather than treating one feature page as the template.
- Keep the generator prompt consistent with that shared reference. Preserve source verification, self-contained explanations, image generation and delivery checks, and completion checks when changing the workflow.
- For generated feature-guide tasks, follow these working rules and the shared style included in the task prompt even though the task runs from the repository root.
- Preserve unrelated changes and guide content. Updating generation guidance does not authorize regenerating every guide or running the batch generator.
- Generate each guide image once and leave image quality and rendered visual review to the user. Do not inspect generated artwork, regenerate for aesthetic defects, or block completion because visual review is pending. Keep source/CSS review and basic delivery checks.

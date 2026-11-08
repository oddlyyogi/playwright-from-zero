# Chapter 12: Run Tests in GitHub: ESLint, TypeScript Checks and CI Pipeline

Every passenger at an airport goes through the same checks in the same order, and a CI pipeline does that for test code. We add ESLint with the Playwright plugin, a TypeScript check, and named npm scripts, catch a real mistake with each, then add both checks to the GitHub Actions workflow that Playwright can create for you, and watch the pipeline run on GitHub.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

Checks:

```bash
npm run lint       # ESLint with the Playwright rules
npm run typecheck  # tsc --noEmit
```

`.github/workflows/playwright.yml` is the pipeline from the video. In this course repository it runs from `.github/workflows/chapter-12.yml` at the top of the repository, because GitHub only reads workflows from there.

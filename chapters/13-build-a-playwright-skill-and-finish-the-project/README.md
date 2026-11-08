# Chapter 13: Build a Playwright Skill and Finish the Project

A restaurant kitchen keeps a card on the wall for each dish so it comes out the same whoever cooks it, and an agent skill is that card for an AI assistant. We finish a small Playwright project for a practice shop with web and API tests, lint, type checks and one command that checks everything, look inside the skill Playwright already ships, and write our own skill with the rules that keep tests on this shop reliable.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

`npm run check` runs ESLint, the TypeScript check and the Playwright tests (Chromium), and stops at the first failure.

`.claude/skills/shop-tests/SKILL.md` is the project skill from the video: the house rules an AI assistant (or a new tester) should follow when writing tests for this shop.

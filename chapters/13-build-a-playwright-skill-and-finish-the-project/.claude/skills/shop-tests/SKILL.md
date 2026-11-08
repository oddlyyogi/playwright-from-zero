---
name: shop-tests
description: Write, fix or review Playwright tests for the Toolshop practice site,
  when adding or changing a test, or when a test fails.
---

# Toolshop tests

## Before writing a test
- Read the page first with `npx playwright cli snapshot` and use the names it shows.

## Rules
- Find elements by role, label or placeholder, the way a person would.
- Don't put product codes (IDs) in locators or URLs. They change whenever the
  demo data is reset. Search by name instead.
- The site is shared, so check rules, not exact counts or prices.
- After a search, wait for `[data-test="search_completed"]` before reading results.
- Every check uses `await expect(...)`. No fixed waits.
- API tests send `Accept: application/json`.

## Before you say a test is done
1. Break it once on purpose and watch it fail, then put it back.
2. Run `npm run check`. Lint, type check and tests must all pass.

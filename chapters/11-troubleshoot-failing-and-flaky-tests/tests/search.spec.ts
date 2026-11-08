import { test, expect } from '@playwright/test';

test('every result for pliers is a pair of pliers', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search').fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();
  const results = page.locator('[data-test="search_completed"]');
  await expect(results).toBeVisible();
  const names = await results.locator('[data-test="product-name"]').allTextContents();
  expect(names.length).toBeGreaterThan(0);
  for (const name of names) {
    expect(name).toContain('Pliers');
  }
});

test('a search shows the combination pliers', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search').fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();
  const results = page.locator('[data-test="search_completed"]');
  await expect(results.getByRole('heading', { name: 'Combination Pliers' })).toBeVisible();
});

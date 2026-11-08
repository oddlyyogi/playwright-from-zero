import { test, expect } from '@playwright/test';

test('the home page has the shop title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Toolshop/);
});

test('a search finds the cordless drill', async ({ page }) => {
  await test.step('search for drill', async () => {
    await page.goto('/');
    await page.getByPlaceholder('Search').fill('drill');
    await page.getByRole('button', { name: 'Search' }).click();
  });
  await test.step('check the results', async () => {
    await expect(page.getByRole('heading', { name: 'Cordless Drill 20V' })).toBeVisible();
  });
});

test('a search for unicorn finds the unicorn hammer', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search').fill('unicorn');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Unicorn Hammer' })).toBeVisible();
});

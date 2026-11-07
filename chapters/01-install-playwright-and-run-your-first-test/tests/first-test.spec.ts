import { test, expect } from '@playwright/test';

test('search finds pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');
  await page.getByPlaceholder('Search').fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(
    page.getByRole('heading', { name: 'Combination Pliers' })
  ).toBeVisible();
});

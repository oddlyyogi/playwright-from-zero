import { test, expect } from '@playwright/test';

test('adding pliers to the cart shows a message', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByPlaceholder('Search').fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('heading', { name: 'Combination Pliers' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('alert')).toContainText('added');
});

import { test, expect } from '@playwright/test';

test('the home page has the shop title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page).toHaveTitle(/Toolshop/);
});

test('the first product has a price', async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products');
  const body: { data: { name: string; price: number }[] } = await response.json();
  const first = body.data[0];
  expect(first.price).toBeGreaterThan(0);
});

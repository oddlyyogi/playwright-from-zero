import { test, expect } from '@playwright/test';

const SITE = 'https://practicesoftwaretesting.com';
const API = 'https://api.practicesoftwaretesting.com';

test('the page shows the price from the API', async ({ page, request }) => {
  const response = await request.get(`${API}/products/search?q=pliers`);
  const body = await response.json();
  const product = body.data[0];

  await page.goto(`${SITE}/product/${product.id}`);
  await expect(
    page.getByRole('heading', { name: product.name })
  ).toBeVisible();
  const price = page.locator('[data-test="unit-price"]');
  await expect(price).toHaveText(String(product.price));
});

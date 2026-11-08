import { test, expect } from '@playwright/test';

test('the price slider hides products over the limit', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  const max = page.getByRole('slider', { name: 'ngx-slider-max' });
  await max.press('PageDown');
  await expect(max).toHaveAttribute('aria-valuenow', '80');
  await expect(async () => {
    const prices = await page.locator('[data-test="product-price"]').allTextContents();
    const numbers = prices.map((price) => Number(price.replace('$', '')));
    expect(numbers.length).toBeGreaterThan(0);
    expect(Math.max(...numbers)).toBeLessThanOrEqual(80);
  }).toPass();
});

import { test, expect } from '@playwright/test';

test('the hammer filter shows only hammers', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('checkbox', { name: 'Hammer' }).check();
  const names = page.getByTestId('product-name');
  await expect(names.first()).toContainText(/hammer/i);
  for (const name of await names.all()) {
    await expect(name).toContainText(/hammer/i);
  }
});

test('sorting by price puts the highest first', async ({ page }) => {
  await page.goto('/');
  const first = page.getByTestId('product-name').first();
  await expect(first).toBeVisible();
  const sort = page.getByRole('combobox', { name: 'Sort' });
  await sort.selectOption('Price (High - Low)');
  await expect(async () => {
    const prices = await page.getByTestId('product-price').allTextContents();
    const numbers = prices.map((price) => Number(price.replace('$', '')));
    const highFirst = [...numbers].sort((a, b) => b - a);
    expect(numbers).toEqual(highFirst);
  }).toPass();
});

test('an out of stock product cannot be added', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search').fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();
  const card = page.getByRole('link').filter({ hasText: 'Long Nose Pliers' });
  await expect(card.getByText('Out of stock')).toBeVisible();
  await card.click();
  const heading = page.getByRole('heading', { name: 'Long Nose Pliers' });
  await expect(heading).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeDisabled();
});

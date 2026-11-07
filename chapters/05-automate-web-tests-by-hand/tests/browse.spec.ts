import { test, expect } from '@playwright/test';

test.describe('browsing the shop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('a category page opens', async ({ page }) => {
    await page.getByTestId('nav-categories').click();
    await page.getByTestId('nav-hand-tools').click();
    await expect(page).toHaveURL(/hand-tools/);
    await expect(page).toHaveTitle(/Hand Tools/);
    const heading = page.getByRole('heading', { name: 'Category: Hand Tools' });
    await expect(heading).toBeVisible();
  });

  test('two items cost twice the price', async ({ page }) => {
    await page.getByRole('heading', { name: 'Combination Pliers' }).click();
    const label = page.getByTestId('unit-price');
    await expect(label).toBeVisible();
    const unitPrice = Number(await label.textContent());
    await page.getByTestId('increase-quantity').click();
    await expect(page.getByTestId('quantity')).toHaveValue('2');
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await expect(page.getByTestId('cart-quantity')).toHaveText('2');
    await page.getByTestId('nav-cart').click();
    const total = `$${(unitPrice * 2).toFixed(2)}`;
    await expect(page.getByTestId('cart-total')).toHaveText(total);
  });
});

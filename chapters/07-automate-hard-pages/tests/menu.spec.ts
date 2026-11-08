import { test, expect } from '@playwright/test';

test('the language menu switches the shop to German', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByRole('button', { name: 'Select language' }).click();
  await page.getByRole('menuitem', { name: 'DE' }).click();
  await expect(page.getByRole('menuitem', { name: 'Kategorien' })).toBeVisible();
});

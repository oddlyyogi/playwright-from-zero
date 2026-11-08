import { test, expect } from '@playwright/test';

test('the documentation link opens in a new tab', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  const tabOpening = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Documentation' }).click();
  const docs = await tabOpening;
  await expect(docs).toHaveURL(/practice-software-testing/);
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
});

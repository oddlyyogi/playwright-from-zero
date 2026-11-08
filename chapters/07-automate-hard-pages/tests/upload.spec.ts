import { test, expect } from '@playwright/test';

test('a file with text in it is refused', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/contact');
  await page.getByLabel('Attachment').setInputFiles('files/notes.txt');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('File should be empty.')).toBeVisible();
});

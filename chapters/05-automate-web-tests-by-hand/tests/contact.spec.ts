import { test, expect } from '@playwright/test';

test('the contact form can be sent', async ({ page }) => {
  await page.goto('/contact');
  await page.getByLabel('First name').fill('Test');
  await page.getByLabel('Last name').fill('Tester');
  await page.getByLabel('Email address').fill('test.tester@example.com');
  await page.getByLabel('Subject').selectOption('Return');
  await page.getByLabel('Message').fill(
    'This is a practice message from an automated test. Please ignore it.'
  );
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('Thanks for your message')).toBeVisible();
});

test('the empty form shows errors', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByText('First name is required')).toBeVisible();
  await expect(page.getByText('Message is required')).toBeVisible();
});

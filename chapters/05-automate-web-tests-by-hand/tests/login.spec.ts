import { test, expect } from '@playwright/test';

test('the empty login form shows errors', async ({ page }) => {
  await page.goto('/auth/login');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Password is required')).toBeVisible();
});

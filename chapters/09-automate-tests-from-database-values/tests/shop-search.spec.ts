import { test, expect } from '@playwright/test';
import Database from 'better-sqlite3';

const db = new Database('data/checks.db', { readonly: true });
const checks = db
  .prepare('SELECT term, expected FROM search_checks')
  .all() as { term: string; expected: string }[];
db.close();

for (const check of checks) {
  test(`the shop shows ${check.expected} for ${check.term}`, async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByPlaceholder('Search').fill(check.term);
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('heading', { name: check.expected })).toBeVisible();
  });
}

import { test, expect } from '@playwright/test';
import Database from 'better-sqlite3';

const db = new Database('data/checks.db', { readonly: true });
const checks = db
  .prepare('SELECT term, expected FROM search_checks')
  .all() as { term: string; expected: string }[];
db.close();

for (const check of checks) {
  test(`searching for ${check.term} finds ${check.expected}`, async ({ request }) => {
    const response = await request.get(
      'https://api.practicesoftwaretesting.com/products/search',
      { params: { q: check.term } },
    );
    const body = await response.json();
    const names = body.data.map((product: { name: string }) => product.name);
    expect(names).toContain(check.expected);
  });
}

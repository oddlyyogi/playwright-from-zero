import { test, expect } from '../fixtures/pages';
import products from '../data/products.json';

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
});

for (const product of products) {
  test(`search for ${product.term} @smoke`, async ({ homePage }) => {
    await homePage.search(product.term);
    await expect(homePage.product(product.expected)).toBeVisible();
  });
}

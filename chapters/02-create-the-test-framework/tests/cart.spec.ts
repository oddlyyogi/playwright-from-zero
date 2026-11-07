import { test, expect } from '../fixtures/pages';

test('add a product to the cart', async ({ homePage, productPage }) => {
  await homePage.goto();
  await homePage.search('pliers');
  await homePage.openProduct('Combination Pliers');
  await productPage.addToCart();
  await expect(productPage.addedMessage).toContainText('added');
  await expect(productPage.cartCount).toHaveText('1');
});

import type { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly addButton: Locator;
  readonly addedMessage: Locator;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.addButton = page.getByRole('button', { name: 'Add to cart' });
    this.addedMessage = page.getByRole('alert');
    this.cartCount = page.getByTestId('cart-quantity');
  }

  async addToCart() {
    await this.addButton.click();
  }
}

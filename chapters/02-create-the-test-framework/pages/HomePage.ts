import type { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByPlaceholder('Search');
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async search(term: string) {
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }

  product(name: string) {
    return this.page.getByRole('heading', { name });
  }

  async openProduct(name: string) {
    await this.product(name).click();
  }
}

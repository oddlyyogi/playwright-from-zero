import { test } from '@playwright/test';

test('list the API calls behind a search', async ({ page }) => {
  page.on('response', (response) => {
    const url = response.url();
    if (url.includes('api.')) {
      console.log(response.request().method(), response.status(), url);
    }
  });

  await page.goto('https://practicesoftwaretesting.com');
  await page.getByPlaceholder('Search').fill('pliers');
  const searching = page.waitForResponse('**/products/search');
  await page.getByRole('button', { name: 'Search' }).click();
  await searching;
});

import { test, expect } from '@playwright/test';

test('the product list has names and prices', async ({ request }) => {
  const response = await request.get('/products');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.length).toBeGreaterThan(0);
  for (const product of body.data) {
    expect(product).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        price: expect.any(Number),
      }),
    );
  }
});

test('a search only returns matching products', async ({ request }) => {
  const response = await request.get('/products/search', {
    params: { q: 'pliers' },
  });
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.data.length).toBeGreaterThan(0);
  for (const product of body.data) {
    expect(product.name).toMatch(/pliers/i);
  }
});

test('an unknown product gives a 404', async ({ request }) => {
  const response = await request.get('/products/does-not-exist');
  expect(response.status()).toBe(404);
  expect(await response.json()).toEqual({ message: 'Requested item not found' });
});

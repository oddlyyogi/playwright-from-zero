import { test, expect } from '@playwright/test';

const API = 'https://api.practicesoftwaretesting.com';
test.use({ extraHTTPHeaders: { Accept: 'application/json' } });

test('every product has a name and a price', async ({ request }) => {
  const response = await request.get(`${API}/products`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  for (const product of body.data) {
    expect(product).toEqual(
      expect.objectContaining({ name: expect.any(String), price: expect.any(Number) }),
    );
  }
});

test('an unknown product gives a 404', async ({ request }) => {
  const response = await request.get(`${API}/products/does-not-exist`);
  expect(response.status()).toBe(404);
  expect(await response.json()).toEqual({ message: 'Requested item not found' });
});

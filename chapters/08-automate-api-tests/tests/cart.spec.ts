import { test, expect } from '@playwright/test';

test('a cart can be filled and deleted', async ({ request }) => {
  const search = await request.get('/products/search', {
    params: { q: 'Combination Pliers' },
  });
  const pliers = (await search.json()).data[0];

  const created = await request.post('/carts');
  expect(created.status()).toBe(201);
  const cart = await created.json();

  const added = await request.post(`/carts/${cart.id}`, {
    data: { product_id: pliers.id, quantity: 2 },
  });
  expect(added.ok()).toBeTruthy();

  const fetched = await request.get(`/carts/${cart.id}`);
  const items = (await fetched.json()).cart_items;
  expect(items).toHaveLength(1);
  expect(items[0].quantity).toBe(2);
  expect(items[0].product.name).toBe('Combination Pliers');

  const deleted = await request.delete(`/carts/${cart.id}`);
  expect(deleted.status()).toBe(204);
  const gone = await request.get(`/carts/${cart.id}`);
  expect(gone.status()).toBe(404);
});

test('a quantity of zero is refused', async ({ request }) => {
  const search = await request.get('/products/search', {
    params: { q: 'Combination Pliers' },
  });
  const pliers = (await search.json()).data[0];
  const cart = await (await request.post('/carts')).json();

  const response = await request.post(`/carts/${cart.id}`, {
    data: { product_id: pliers.id, quantity: 0 },
  });
  expect(response.status()).toBe(422);
  const body = await response.json();
  expect(body.message).toBe('The quantity field must be at least 1.');
  await request.delete(`/carts/${cart.id}`);
});

import { test, expect } from '@playwright/test';

const API = 'https://api.practicesoftwaretesting.com';

test('the product list comes back', async ({ request }) => {
  const response = await request.get(`${API}/products?page=1`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.total).toBeGreaterThan(0);
  expect(body.data.length).toBeGreaterThan(0);
  console.log(body.total, 'products, first is', body.data[0].name);
});

test('an unknown product gives a 404', async ({ request }) => {
  const response = await request.get(`${API}/products/does-not-exist`);
  expect(response.status()).toBe(404);
  const body = await response.json();
  expect(body.message).toBe('Requested item not found');
});

test('a new cart can be created', async ({ request }) => {
  const created = await request.post(`${API}/carts`);
  expect(created.status()).toBe(201);
  const cart = await created.json();
  const fetched = await request.get(`${API}/carts/${cart.id}`);
  expect(fetched.status()).toBe(200);
});

# Chapter 8: Automate API Tests

Car makers test an engine on a bench as well as on the road, and an API test is the bench. Without opening a browser, we test a real shop's API: the shape of its product list, its search, a clear 404, and a whole shopping cart from creation to deletion. Then a validation test fails with a confusing 404, and we find out why a single header fixes it.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

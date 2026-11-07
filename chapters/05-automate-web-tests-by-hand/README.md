# Chapter 5: Automate Web Tests by Hand

Go to the third shop on the left, or go to the bakery with the blue sign? Giving directions explains Playwright locators. From an empty folder we write eight tests by hand: fill in and send a form, check error messages, use a filter, check a sort order, narrow down to one product, read a strict mode error, group tests with beforeEach and check the sums in a cart, then use UI mode and run them in three browsers.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

# Chapter 9: Automate Tests from Database Values

A teacher marks every paper against an answer key, and tests can be marked against a database the same way. We build a small SQLite table of search checks, turn every row into a Playwright test for the shop's API and its web page, add a row to get a new test without touching the code, and look at what a data-driven failure is really telling us.

## Run it

```bash
npm install
npx playwright install
node data/seed.mjs
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

`node data/seed.mjs` builds the SQLite database `data/checks.db` from `data/seed.sql`. Add a row to `seed.sql`, run the script again, and the tests pick up the new row.

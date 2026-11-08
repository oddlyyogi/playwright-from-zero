# Chapter 11: Troubleshoot Failing and Flaky Tests

The rattle that only happens sometimes is the hardest one for a mechanic, and a flaky test is the same. On a real shop we catch a test that fails on some runs and passes on others, read its error, watch the failure in Playwright's trace, see why retries only hide it, and fix the cause. Then we find a test that passes even when the feature is broken, and make it able to fail.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

To see the flakiness for yourself, replace the first test with the version from the video (it reads the product names straight after clicking Search) and run `npx playwright test --project=chromium --repeat-each=10`. The fixed version waits for `[data-test="search_completed"]` first.

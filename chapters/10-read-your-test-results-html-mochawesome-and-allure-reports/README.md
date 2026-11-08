# Chapter 10: Read Your Test Results: HTML, Mochawesome and Allure Reports

A mechanic, a car owner and a garage manager each need a different report from the same service, and test reports are the same. From one set of Playwright tests, with one failing on purpose, we make and open Playwright's HTML report, a Mochawesome page and an Allure report, and see what each one shows, who it is for, and how to run them all together.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

One test, `a search for unicorn finds the unicorn hammer`, fails on purpose, so that every report has a failure to show.

The reports:

```bash
npx playwright show-report               # Playwright's HTML report
open mochawesome-report/mochawesome.html # or open the file in any browser
npx allure generate allure-results       # build the Allure report
npx allure open allure-report            # serve it
```

`pwmochawesome` was last published in 2024 and says it was tested with Playwright 1.46; it worked here with Playwright 1.65.

# Chapter 1: Install Playwright and Run Your First Test

Tired of testing the same login page every release? A night guard and a written-down route explain test automation. We install Playwright with TypeScript, read every file it creates, run tests in Chromium, Firefox and WebKit, open the HTML report, use the Playwright extension for VS Code, write a first test line by line, watch it in a real browser, and read a real failure.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

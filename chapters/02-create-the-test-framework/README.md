# Chapter 2: Create the Test Framework

One test is easy. Two hundred thrown together break every time a label changes. A workshop wall with a hook for every tool explains a test framework. We move settings into the config, keep values in a .env file, build page objects, hand them out with fixtures, follow the code through the layers, keep test data in JSON, share steps with beforeEach, add npm scripts and tags, and save a screenshot, video and trace for every failure.

## Run it

```bash
npm install
npx playwright install
cp .env.example .env
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

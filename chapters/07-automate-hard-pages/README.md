# Chapter 7: Automate Hard Pages

A locksmith brings a different tool for each kind of lock, and some parts of a web page need a different tool too. On a real practice shop we test a link that opens a new tab, a file upload with an unusual rule, a price slider moved with the keyboard, and a language menu that only appears once it is opened, and we see why the ordinary approach fails for each one.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

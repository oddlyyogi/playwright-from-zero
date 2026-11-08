# Chapter 6: Automate Faster with Codegen, MCP and Playwright CLI

Write it yourself, dictate it, or ask an assistant? Three ways of getting a letter written explain three ways of getting a Playwright test written. We record a test with Codegen and fix what it gets wrong, drive a browser from the terminal with the Playwright CLI, see exactly what an AI tool receives through MCP, and learn what to check before trusting a test that a tool wrote.

## Run it

```bash
npm install
npx playwright install
npx playwright test
```

The tests use the public practice site at https://practicesoftwaretesting.com, so they need an internet connection.

`tests/recorded.spec.ts` is the raw Codegen recording, kept as it was written. It fails on purpose: the product code in its locator changes whenever the demo data is reset. `tests/cart.spec.ts` is the fixed version, and it passes.

`tools/mcp-demo.mjs` plays the part of an AI tool: it starts `npx playwright mcp`, lists its tools and reads the contact page. Run it with `node tools/mcp-demo.mjs`.

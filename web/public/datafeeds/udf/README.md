# AZIX Exchange — UDF Datafeed Adapter

This folder contains the [UDF](https://github.com/tradingview/charting_library/wiki/UDF) datafeed adapter used by the AZIX Exchange TradingView chart widget.

It implements the [JS API](https://github.com/tradingview/charting_library/wiki/JS%20API) and makes HTTP requests using the UDF protocol to pull price and OHLCV data from the AZIX Exchange API.

## Folders

| Folder | Contents |
|---|---|
| `src/` | TypeScript source code |
| `lib/` | Transpiled ES5 output |
| `dist/` | Bundled JS files for use in the widget constructor |

## Build

Install dependencies first:

```bash
npm install
```

Available scripts:

```bash
# Compile TypeScript → lib/
npm run compile

# Bundle lib/ → dist/
npm run bundle-js

# Compile + bundle
npm run build
```

To produce a minified bundle set `ENV` to anything other than `development`:

```bash
ENV=prod npm run build
```

---

*AZIX Exchange — [azix.world](https://azix.world)*

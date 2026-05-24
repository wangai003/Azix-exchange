# AZIX Exchange — Test Suite

End-to-end tests for the AZIX Exchange application using Playwright.

## Overview

The test suite validates page navigation and functionality across the platform, including wallet management, trading, security settings, and more.

## Test Structure

```
test/
├── playwright/              # Playwright test suite
│   ├── tests/
│   │   ├── global-setup.js  # Global authentication setup
│   │   ├── page-navigation/ # Page navigation tests
│   │   └── utils/           # Test utilities and helpers
│   └── playwright.config.js # Playwright configuration
└── Cypress/                 # Cypress test suite (legacy)
```

## Prerequisites

- Node.js v20 or higher
- npm or yarn

## Setup

1. Navigate to the Playwright test directory:
   ```bash
   cd test/playwright
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure test credentials:
   - Ensure `tests/utils/test-data.js` exists and contains the required credentials
   - The file should include user credentials, API endpoints, and test configuration
   - You can override defaults using environment variables

## Running Tests

```bash
# Run all tests
npm test

# Run in headed mode (visible browser)
npm run test:headed

# Run a specific file
npx playwright test tests/page-navigation/page-navigation.spec.js

# UI mode
npx playwright test --ui
```

## Test Configuration

| Setting | Value |
|---|---|
| Base URL | `https://azix.world` (or your local dev server) |
| Browser | Chromium (Desktop Chrome) |
| Workers | 1 (prevents HTTP 429 rate-limit errors) |
| Retries | 2 on CI, 0 locally |
| Auth | Global setup — authenticates once, reuses session state |

## Test Categories

### Wallet
- Main wallet page, deposit, withdrawal, address book, volume, history

### History
- Trades, orders, deposits, withdrawals

### Security
- 2FA, password change, API keys, active sessions, login history

### Verification
- Email, phone, identity, payment

### Settings
- Notifications, interface, language, audio cues, account

### Staking
- Stake overview, staking details, CeFi/DeFi

### P2P
- Deals, orders, profile, post deal, my deals

### Apps
- App listing, my apps

### Core Pages
- Summary, account, markets, trade (with chart), prices

### Top Bar
- Navigation hover, market selection, dark/light mode toggle

## Utilities

| File | Purpose |
|---|---|
| `tests/utils/test-data.js` | Credentials, API endpoints, test config (required) |
| `tests/utils/login-helper.js` | Authentication helpers |
| `tests/utils/helpers.js` | General test utilities |
| `tests/utils/session-helper.js` | Session management |

## Global Setup

`global-setup.js` authenticates once before the full suite runs and saves session state to `.auth/admin.json`.

## Test Reports

```bash
# View HTML report
npx playwright show-report
```

Reports are generated in:
- `playwright-report/index.html`
- `test-results/results.json`
- `test-results/results.xml`

## Troubleshooting

**Authentication issues** — Delete `.auth/admin.json` to clear cached session state and re-authenticate.

**Timeouts** — Increase timeout values in `playwright.config.js` or check network connectivity.

**Flaky tests** — Retries are enabled on CI. Check `test-results/` for screenshots and videos captured on failure.

---

*AZIX Exchange — [azix.world](https://azix.world) · [github.com/wangai003](https://github.com/wangai003)*

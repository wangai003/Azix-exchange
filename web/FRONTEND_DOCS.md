# AZIX Exchange — Frontend Documentation

**African Zone for International Exchange**
Version: 2.17.5 | Stack: React CRA | Repository: [github.com/wangai003/Azix-exchange](https://github.com/wangai003/Azix-exchange)

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Languages & Frameworks](#languages--frameworks)
4. [Project Structure](#project-structure)
5. [Environment & Configuration](#environment--configuration)
6. [State Management](#state-management)
7. [Routing](#routing)
8. [Theming & Branding](#theming--branding)
9. [Internationalisation](#internationalisation)
10. [Completed Pages](#completed-pages)
11. [Admin Panel](#admin-panel)
12. [Components Library](#components-library)
13. [API & WebSocket Integration](#api--websocket-integration)
14. [Build & Deployment](#build--deployment)
15. [Known Remaining Items](#known-remaining-items)

---

## Overview

The AZIX Exchange frontend is a React single-page application (SPA) built on Create React App (CRA). It connects to the AZIX Exchange REST API and WebSocket server to provide a full-featured crypto trading interface for African and global users.

**Brand Identity**

| Token              | Value                    |
| ------------------ | ------------------------ |
| Primary (Gold)     | `#C9A84C`                |
| Background (Black) | `#0A0C0A`                |
| Accent (Green)     | `#2D7A3A`                |
| Font               | System default (inherit) |

**Live endpoints**

| Environment | API URL                            |
| ----------- | ---------------------------------- |
| Production  | `https://api.azixexchange.com`     |
| Network     | `https://api.azix.network`         |
| Testnet     | `https://api.testnet.azix.network` |
| WebSocket   | `wss://api.azixexchange.com`       |

---

## Technology Stack

### Core

| Package                    | Version | Purpose                           |
| -------------------------- | ------- | --------------------------------- |
| `react`                    | 16.13.1 | UI library                        |
| `react-dom`                | 16.13.1 | DOM rendering                     |
| `react-scripts` (CRA)      | 3.4.3   | Build toolchain                   |
| `@craco/craco`             | 5.8.0   | CRA config override               |
| `redux`                    | 4.0.1   | Global state                      |
| `react-redux`              | 6.0.1   | React–Redux bindings              |
| `redux-form`               | 8.1.0   | Form state management             |
| `redux-thunk`              | 2.3.0   | Async action middleware           |
| `redux-promise-middleware` | 6.1.0   | Promise action middleware         |
| `redux-persist`            | 4.10.2  | State persistence to localStorage |
| `reselect`                 | 4.0.0   | Memoised Redux selectors          |
| `react-router`             | 3.2.1   | Client-side routing (v3)          |

### UI Components

| Package                  | Version | Purpose                       |
| ------------------------ | ------- | ----------------------------- |
| `antd`                   | 4.6.2   | Admin panel UI components     |
| `@ant-design/icons`      | 4.2.2   | Icon set for Ant Design       |
| `@ant-design/compatible` | 1.0.5   | Legacy Ant compat layer       |
| `classnames`             | 2.2.6   | Conditional CSS class utility |
| `react-svg`              | 11.2.2  | SVG rendering component       |
| `react-modal`            | 3.8.1   | Accessible modal dialogs      |
| `rc-tooltip`             | 3.7.3   | Tooltip component             |
| `react-alice-carousel`   | 1.19.3  | Carousel/slider               |
| `react-draggable`        | 4.4.6   | Draggable UI elements         |
| `react-grid-layout`      | 1.3.0   | Drag-and-drop grid layouts    |
| `react-truncate-markup`  | 3.0.1   | Text truncation               |
| `react-transition-group` | 4.4.1   | Animated transitions          |

### Charts & Data Visualisation

| Package                      | Version    | Purpose                             |
| ---------------------------- | ---------- | ----------------------------------- |
| `highcharts`                 | 10.0.0     | Interactive trading charts          |
| `highcharts-react-official`  | 3.1.0      | React wrapper for Highcharts        |
| `react-sparklines`           | 1.7.0      | Inline sparkline charts             |
| `d3-shape`                   | 1.3.7      | D3 shape generators                 |
| TradingView Charting Library | (vendored) | Advanced trading candlestick charts |

### Forms & Validation

| Package                       | Version | Purpose                         |
| ----------------------------- | ------- | ------------------------------- |
| `redux-form`                  | 8.1.0   | Form state in Redux store       |
| `validator`                   | 10.11.0 | String validation utilities     |
| `validate-color`              | 2.1.0   | CSS colour validation           |
| `awesome-phonenumber`         | 2.64.0  | Phone number parsing/validation |
| `multicoin-address-validator` | 0.4.16  | Crypto address validation       |

### Internationalisation

| Package              | Version | Purpose                                      |
| -------------------- | ------- | -------------------------------------------- |
| `react-localization` | 0.1.10  | Runtime string localisation                  |
| `moment`             | 2.24.0  | Date/time formatting                         |
| `moment-timezone`    | 0.5.21  | Timezone-aware formatting                    |
| `moment-jalaali`     | 0.7.2   | Persian/Jalali calendar                      |
| `country-data`       | 0.0.31  | Country metadata (names, codes, phone codes) |
| `flag-icon-css`      | 3.3.0   | CSS SVG flag icons                           |

### Network & API

| Package            | Version | Purpose                  |
| ------------------ | ------- | ------------------------ |
| `axios`            | 0.30.2  | HTTP client              |
| `ws-heartbeat`     | 1.2.0   | WebSocket keep-alive     |
| `query-string`     | 5.1.1   | URL query string parsing |
| `jwt-decode`       | 2.2.0   | JWT token decoding       |
| `universal-cookie` | 4.0.2   | Cookie management        |

### Rich Text & Content

| Package               | Version | Purpose                      |
| --------------------- | ------- | ---------------------------- |
| `draft-js`            | 0.11.5  | Rich text editor core        |
| `react-draft-wysiwyg` | 1.14.5  | WYSIWYG editor component     |
| `draftjs-to-html`     | 0.9.1   | DraftJS → HTML conversion    |
| `html-to-draftjs`     | 1.5.0   | HTML → DraftJS conversion    |
| `react-quill`         | 2.0.0   | Alternative rich text editor |
| `emoji-mart`          | 2.11.1  | Emoji picker (chat)          |

### Crypto & Web3

| Package                    | Version | Purpose                   |
| -------------------------- | ------- | ------------------------- |
| `web3`                     | 1.5.1   | Ethereum/Web3 integration |
| `qrcode.react`             | 0.9.3   | QR code generator         |
| `react-qr-barcode-scanner` | 1.0.6   | QR code scanner (camera)  |

### Utilities

| Package                      | Version | Purpose                      |
| ---------------------------- | ------- | ---------------------------- |
| `mathjs`                     | 5.10.3  | Precise financial arithmetic |
| `numbro`                     | 1.11.1  | Number formatting            |
| `lodash.debounce`            | 4.0.8   | Debounce utility             |
| `lodash.isequal`             | 4.5.0   | Deep equality check          |
| `lodash.merge`               | 4.6.2   | Deep object merge            |
| `react-copy-to-clipboard`    | 5.0.1   | Clipboard copy               |
| `react-csv`                  | 1.1.1   | CSV export                   |
| `react-dates`                | 20.1.0  | Date range picker            |
| `react-helmet`               | 6.0.0   | `<head>` tag management      |
| `react-loadable`             | 5.5.0   | Code-split lazy loading      |
| `flat`                       | 5.0.2   | Deep object flattening       |
| `color`                      | 3.1.3   | Color manipulation           |
| `@simonwep/pickr`            | 1.8.1   | Color picker widget          |
| `react-ga`                   | 2.5.7   | Google Analytics integration |
| `@elastic/apm-rum`           | 5.17.0  | Real user monitoring         |
| `@paciolan/remote-component` | 2.11.0  | Remote plugin components     |
| `react-sortable-hoc`         | 1.10.1  | Sortable list HOC            |
| `react-expanding-textarea`   | 0.2.0   | Auto-expanding textarea      |
| `@react-oauth/google`        | 0.12.2  | Google OAuth login           |

### Dev Tools

| Package                   | Purpose                     |
| ------------------------- | --------------------------- |
| `prettier`                | Code formatting             |
| `husky` + `lint-staged`   | Pre-commit formatting hooks |
| `sass`                    | SCSS compilation            |
| `@google-cloud/translate` | Auto-translation runner     |
| `craco`                   | CRA config override         |

---

## Languages & Frameworks

| Language              | Usage                                                              |
| --------------------- | ------------------------------------------------------------------ |
| **JavaScript (ES6+)** | All application logic, components, actions, reducers               |
| **JSX**               | React component templates                                          |
| **CSS3**              | Global styles, component styles, CSS custom properties             |
| **SCSS / Sass**       | Theming, component-level styling, admin variables                  |
| **JSON**              | Language files, icon maps, configuration                           |
| **HTML5**             | `public/index.html` shell                                          |
| **TypeScript**        | TradingView UDF datafeed adapter (`web/public/datafeeds/udf/src/`) |

---

## Project Structure

```
web/
├── public/
│   ├── index.html              # HTML shell
│   ├── assets/
│   │   └── flags/              # African country flag SVGs (flag-icon-css)
│   └── datafeeds/              # TradingView charting library datafeeds
│       └── udf/                # UDF adapter (TypeScript)
├── src/
│   ├── index.js                # App entry point
│   ├── App.js                  # Root component, router setup
│   ├── admin_theme_variables.css  # Admin panel CSS custom properties
│   ├── config/
│   │   ├── index.js            # API endpoint configuration
│   │   ├── constants.js        # App-wide constants
│   │   ├── localizedStrings.js # String resolution with i18n
│   │   ├── languages.js        # Language options (18 languages incl. 7 African)
│   │   ├── icons/              # Icon maps (static.js, dynamic configs)
│   │   └── lang/               # Localisation JSON files
│   │       ├── en.json         # English (primary)
│   │       ├── fr.json         # French
│   │       ├── ar.json         # Arabic
│   │       ├── sw.json         # Kiswahili (African)
│   │       ├── ha.json         # Hausa (African)
│   │       ├── yo.json         # Yorùbá (African)
│   │       ├── am.json         # Amharic / አማርኛ (African)
│   │       ├── zu.json         # isiZulu (African)
│   │       ├── af.json         # Afrikaans (African)
│   │       ├── so.json         # Somali / Soomaali (African)
│   │       └── ... (11 more)
│   ├── actions/                # Redux action creators
│   ├── reducers/               # Redux reducers
│   ├── store.js                # Redux store with middleware
│   ├── utils/                  # Shared utilities
│   │   ├── countries.js        # Country list, Africa-first sort
│   │   ├── token.js            # JWT helpers
│   │   ├── errors.js           # Error localisation
│   │   └── ...
│   ├── components/             # Shared reusable components
│   │   ├── AppFooter/          # Site footer with AZIX links
│   │   ├── AppBar/             # Top navigation bar
│   │   ├── Button/             # Primary button component
│   │   ├── Dialog/             # Modal dialog
│   │   ├── Form/               # Form field factories & validators
│   │   ├── OtpForm/            # OTP input form
│   │   ├── IconTitle/          # Page header with icon
│   │   ├── EditWrapper/        # Inline-edit HOC
│   │   ├── Image/              # Icon/image renderer
│   │   ├── CloudflareTurnstile/  # CAPTCHA integration
│   │   └── ...
│   └── containers/             # Page-level containers (routes)
│       ├── Login/
│       ├── Signup/
│       ├── Trade/
│       ├── Wallet/
│       ├── UserSettings/
│       ├── Admin/
│       └── ...
```

---

## Environment & Configuration

Environment variables are set in `web/.env`:

| Variable                            | Default                        | Description                    |
| ----------------------------------- | ------------------------------ | ------------------------------ |
| `REACT_APP_SERVER_ENDPOINT`         | `https://api.azixexchange.com` | Production API URL             |
| `REACT_APP_DEVELOPMENT_ENDPOINT`    | `https://api.azixexchange.com` | Dev API URL                    |
| `REACT_APP_SERVER_NETWORK_ENDPOINT` | `https://api.azix.network`     | Network API URL                |
| `REACT_APP_STREAM_ENDPOINT`         | derived from API URL           | WebSocket URL                  |
| `REACT_APP_DEFAULT_COUNTRY`         | `GH`                           | Default country (Ghana)        |
| `REACT_APP_PLUGIN_DEV_MODE`         | `false`                        | Enable plugin development mode |

**Start commands**

```bash
cd web
npm install
npm start          # Dev server with SCSS watcher
npm run build      # Production build
```

> Node v20 requires `NODE_OPTIONS=--openssl-legacy-provider` (already set in the `start-js` script).

---

## State Management

Redux store shape (top-level slices):

| Slice       | Contents                                                |
| ----------- | ------------------------------------------------------- |
| `app`       | Exchange constants, pairs, coins, theme, info, language |
| `auth`      | Authentication state, logout message                    |
| `user`      | Logged-in user profile, balance, settings               |
| `orderbook` | Live orderbook data per symbol                          |
| `trade`     | Trade history, recent trades                            |
| `wallet`    | Deposit/withdrawal state                                |
| `form`      | All Redux Form state                                    |

Middleware stack: `redux-thunk` → `redux-promise-middleware` → `redux-logger` (dev) → `redux-persist`

---

## Routing

React Router v3 (`react-router@3.2.1`). Routes are defined in `src/routes/index.js`.

| Path                     | Component            | Auth    |
| ------------------------ | -------------------- | ------- |
| `/`                      | Home / Markets       | Public  |
| `/login`                 | Login                | Public  |
| `/signup`                | Signup               | Public  |
| `/reset-password`        | RequestResetPassword | Public  |
| `/reset-password/:code`  | ResetPassword        | Public  |
| `/markets`               | Markets / CoinPage   | Public  |
| `/trade/:pair`           | Trade                | Public  |
| `/wallet`                | Wallet               | Private |
| `/wallet/:coin/deposit`  | Deposit              | Private |
| `/wallet/:coin/withdraw` | Withdraw             | Private |
| `/account`               | Account / Summary    | Private |
| `/account/settings`      | UserSettings         | Private |
| `/account/security`      | UserSecurity         | Private |
| `/account/verification`  | Verification         | Private |
| `/account/history`       | TransactionsHistory  | Private |
| `/fees-and-limits`       | FeesAndLimits        | Public  |
| `/stake`                 | Stake                | Private |
| `/p2p`                   | P2P                  | Private |
| `/quick-trade/:pair`     | QuickTrade           | Public  |
| `/apps`                  | Apps                 | Public  |
| `/marketplace`           | FundMarketplace      | Public  |
| `/admin`                 | Admin Dashboard      | Admin   |
| `/admin/*`               | Admin sub-pages      | Admin   |

---

## Theming & Branding

### CSS Custom Properties

Global theme tokens are defined via the operator's configuration API and applied as CSS variables at runtime. Key properties:

```css
/* Example — AZIX dark theme */
--calculated_base_background: #0a0c0a;
--calculated_specials_buttons-links-and-highlights: #c9a84c;
--calculated_specials_my-part-orders-hover: #2d7a3a;
```

### Admin Panel Theme

`src/admin_theme_variables.css` defines a separate set of CSS custom properties exclusively for the admin panel:

```css
:root {
	--admin_panel_sidebar_background: #0a0d10;
	--admin_panel_content_background: #151a1f;
	--admin_panel_button_primary: #c9a84c;
	--admin_panel_success: #2d7a3a;
	/* ... 18 total tokens */
}
```

Ant Design (admin panel component library) is overridden via global CSS selectors in the same file to match AZIX brand colors.

### SCSS Structure

SCSS files live alongside their components. Global partials:

| File                                               | Purpose                                            |
| -------------------------------------------------- | -------------------------------------------------- |
| `src/index.css`                                    | Global reset and base styles                       |
| `src/App.scss`                                     | App-level layout styles                            |
| `src/_containers.scss`                             | Container-level shared styles                      |
| `src/components/AppFooter/_AppFooter.scss`         | Footer styles                                      |
| `src/containers/AuthContainer/_AuthContainer.scss` | Auth page layout                                   |
| `src/containers/Admin/AppWrapper/index.css`        | Admin layout, sidebar, top bar                     |
| `src/admin_theme_variables.css`                    | Admin CSS custom properties + Ant Design overrides |

---

## Internationalisation

### Languages Supported (18 total)

African languages are listed first in the language picker:

| Code | Language          | Flag         |
| ---- | ----------------- | ------------ |
| `sw` | Kiswahili         | Kenya        |
| `ha` | Hausa             | Nigeria      |
| `yo` | Yorùbá            | Nigeria      |
| `am` | አማርኛ (Amharic)    | Ethiopia     |
| `zu` | isiZulu           | South Africa |
| `af` | Afrikaans         | South Africa |
| `so` | Soomaali (Somali) | Somalia      |
| `fr` | Français          | —            |
| `ar` | العربية           | —            |
| `pt` | Português         | —            |
| `en` | English           | —            |
| `de` | Deutsch           | —            |
| `es` | Español           | —            |
| `id` | Bahasa Indonesia  | —            |
| `it` | Italiano          | —            |
| `ja` | 日本語            | —            |
| `ko` | 한국어            | —            |
| `nl` | Nederlands        | —            |
| `ru` | Русский           | —            |
| `tr` | Türkçe            | —            |
| `zh` | 中文              | —            |

African language JSON files (`sw`, `ha`, `yo`, `am`, `zu`, `af`, `so`) are stub files (`{}`) that fall back to English strings via `react-localization`'s fallback mechanism.

### Country List

All countries from the `country-data` npm package, sorted **Africa-first** using a custom sort in `src/utils/countries.js`. Priority order: Ghana → Nigeria → Kenya → South Africa → Ethiopia → Tanzania → Uganda → Rwanda → ... (50+ African countries) → rest of world alphabetically.

### Timezones

The settings page offers 18 African timezones plus UTC, defined in `src/containers/UserSettings/SettingsForm.js`:

- GMT+0: Accra, Abidjan, Dakar
- GMT+1: Lagos, Casablanca, Douala, Tunis, Luanda
- GMT+2: Johannesburg, Cairo, Kigali, Lusaka, Harare
- GMT+3: Nairobi, Addis Ababa, Dar es Salaam, Kampala
- UTC

### Display Currencies

14 African and international fiat currencies available in account settings (saved to `localStorage`):

GHS, NGN, KES, ZAR, ETB, TZS, UGX, RWF, EGP, MAD, XOF, USD, EUR, GBP

---

## Completed Pages

### Public Pages

| Page                 | Path                 | Description                                                                       |
| -------------------- | -------------------- | --------------------------------------------------------------------------------- |
| **Home / Markets**   | `/`                  | Market prices overview, coin listings                                             |
| **Login**            | `/login`             | Email/password login with OTP support, Cloudflare Turnstile CAPTCHA, Google OAuth |
| **Signup**           | `/signup`            | Account registration with AZIX terms & privacy links                              |
| **Markets**          | `/markets`           | All trading pairs with 24h price data                                             |
| **Coin Page**        | `/markets/:coin`     | Individual asset price page                                                       |
| **Trade**            | `/trade/:pair`       | Full trading interface with orderbook, chart, order form                          |
| **Quick Trade**      | `/quick-trade/:pair` | Simplified buy/sell interface                                                     |
| **Fees & Limits**    | `/fees-and-limits`   | Fee schedule and withdrawal limits                                                |
| **Apps**             | `/apps`              | Exchange plugin applications                                                      |
| **Fund Marketplace** | `/marketplace`       | AZIX investment fund marketplace (PE, Crypto, Stable, Akofa)                      |
| **Reset Password**   | `/reset-password`    | Password reset request                                                            |
| **Terms of Service** | `/legal`             | Legal terms                                                                       |

### Authenticated Pages

| Page                      | Path                              | Description                                          |
| ------------------------- | --------------------------------- | ---------------------------------------------------- |
| **Account Summary**       | `/account`                        | Account overview, balance summary                    |
| **Wallet**                | `/wallet`                         | All asset balances                                   |
| **Deposit**               | `/wallet/:coin/deposit`           | Deposit with QR code and address                     |
| **Withdraw**              | `/wallet/:coin/withdraw`          | Withdrawal with address validation                   |
| **Transaction History**   | `/account/history`                | Full history: trades, orders, deposits, withdrawals  |
| **User Settings**         | `/account/settings`               | Theme, timezone, display currency, order book levels |
| **Language Settings**     | `/account/settings/language`      | 21-language picker (African languages first)         |
| **Notification Settings** | `/account/settings/notifications` | Email and push notification preferences              |
| **Security**              | `/account/security`               | 2FA (OTP), password change, API keys, sessions       |
| **Verification**          | `/account/verification`           | KYC: email, phone, identity, payment verification    |
| **User Profile**          | `/account/profile`                | Profile information                                  |
| **Stake**                 | `/stake`                          | CeFi staking pools                                   |
| **Stake Details**         | `/stake/:id`                      | Individual stake pool details                        |
| **P2P Trading**           | `/p2p`                            | Peer-to-peer deals, orders, profile                  |
| **Volume**                | `/volume`                         | Personal trading volume stats                        |

### Auth Flow Pages

| Page                           | Path                              | Description                         |
| ------------------------------ | --------------------------------- | ----------------------------------- |
| **Login Confirmation**         | `/email-confirm`                  | Suspicious login email confirmation |
| **Verification Email Request** | `/verify`                         | Resend verification email           |
| **Verification Email Code**    | `/verify/:code`                   | Email verification via link         |
| **Confirm Password Change**    | `/confirm-change-password/:token` | Password reset confirmation         |
| **Withdrawal Confirmation**    | `/withdraw/confirm`               | Withdrawal email confirmation       |

---

## Admin Panel

Accessible at `/admin`. Requires admin role JWT.

### Admin Pages

| Section            | Path                   | Description                                                 |
| ------------------ | ---------------------- | ----------------------------------------------------------- |
| **Dashboard**      | `/admin`               | Overview cards linking to all admin sections                |
| **General Setup**  | `/admin/general`       | Exchange branding, email config, footer links, whitelisting |
| **Users**          | `/admin/user`          | User list, search, verification, balance management         |
| **Digital Assets** | `/admin/financials`    | Asset list, deposit/withdrawal controls, balances           |
| **Markets**        | `/admin/trade`         | Trading pairs, OTC desk, orderbook management               |
| **Fiat Controls**  | `/admin/fiat`          | Payment systems, on/off ramps, fiat fees                    |
| **Staking**        | `/admin/stakes`        | CeFi staking pool configuration                             |
| **Plugins**        | `/admin/plugins`       | Plugin install/enable/disable/configure                     |
| **Account Tiers**  | `/admin/tiers`         | User level tiers and fee structures                         |
| **Member Roles**   | `/admin/roles`         | Admin team roles and permissions                            |
| **Resources**      | `/admin/resources`     | Links to AZIX docs, API, support, GitHub                    |
| **Earnings**       | `/admin/earnings`      | Fee revenue and settlement                                  |
| **Broker**         | `/admin/broker`        | Broker/OTC configuration                                    |
| **Announcements**  | `/admin/announcements` | Exchange-wide user announcements                            |
| **Transfers**      | `/admin/transfers`     | Admin-initiated asset transfers                             |
| **Chat**           | `/admin/chat`          | Exchange chat moderation                                    |
| **Sessions**       | `/admin/sessions`      | Active user session management                              |
| **Audit Logs**     | `/admin/audits`        | Admin action audit trail                                    |

### Admin Technology

- **UI Library:** Ant Design 4.6.2
- **Layout:** Fixed sidebar (`ant-layout-sider`) + content area
- **Theme:** Dark theme via `admin_theme_variables.css` CSS custom properties
- **Charts:** Highcharts for trading volume, Sparklines for mini-charts
- **Search:** Global operator control search (modal overlay)

---

## Components Library

Key shared components in `src/components/`:

| Component                   | Description                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| `AppFooter`                 | Site footer — hardcoded AZIX section links (Exchange, About, Developers, Resources, Social) |
| `AppBar`                    | Top navigation bar with market selector, theme toggle, account menu                         |
| `Button`                    | Primary branded button (`.holla-button` class, gold color)                                  |
| `Dialog`                    | Accessible modal dialog with optional OTP/notification content                              |
| `OtpForm`                   | 6-digit OTP input for 2FA login                                                             |
| `IconTitle`                 | Page header with SVG icon, title, subtitle, and action link                                 |
| `EditWrapper`               | HOC that wraps strings for inline editing in operator mode                                  |
| `Image`                     | Icon/SVG renderer with fallback                                                             |
| `Notification`              | Alert/info/success notification banners                                                     |
| `Form/factoryFields`        | Renders Redux Form fields from a field definition map                                       |
| `Form/validations`          | Shared validators: required, minValue, maxValue, email, step                                |
| `CloudflareTurnstile`       | Cloudflare Turnstile CAPTCHA widget                                                         |
| `ConfigProvider/withConfig` | HOC injecting `constants` and `icons` from Redux store                                      |
| `Loader`                    | Full-screen/inline spinner                                                                  |
| `CoinIcon`                  | Coin logo with fallback                                                                     |
| `ActionNotification`        | Toast notification for copy/trade confirmations                                             |
| `QRCode`                    | QR code display for deposit addresses                                                       |

---

## API & WebSocket Integration

### REST API

Base URL: `https://api.azixexchange.com/v2`

All authenticated requests use Bearer JWT tokens sent via `Authorization` header. Token is stored in `localStorage` and decoded with `jwt-decode`. Authentication helpers live in `src/utils/token.js` and `src/utils/index.js` (`requestAuthenticated`).

### WebSocket

Connected to `wss://api.azixexchange.com` via the native browser `WebSocket` API with `ws-heartbeat` keep-alive (60-second timeout).

Subscriptions:

| Channel     | Auth required | Data                              |
| ----------- | ------------- | --------------------------------- |
| `orderbook` | No            | Live bid/ask levels               |
| `trade`     | No            | Recent trades                     |
| `wallet`    | Yes           | Real-time balance updates         |
| `order`     | Yes           | Order insert/update/cancel events |

### Network API

Separate endpoint `https://api.azix.network/v2` used by the admin panel for coin info and fee settlement.

---

## Build & Deployment

```bash
# Development
cd web
npm install --legacy-peer-deps
npm start                     # CRA dev server on :3000 + SCSS watcher

# Production build
npm run build                 # Output to web/build/

# Demo build (against production API)
npm run build:demo            # REACT_APP_SERVER_ENDPOINT=https://api.azixexchange.com
```

**CI / GitHub repository:** [github.com/wangai003/Azix-exchange](https://github.com/wangai003/Azix-exchange), branch `main`

**Pre-commit hooks (Husky + lint-staged):** Prettier runs on all staged `.js`, `.json`, `.css`, `.scss`, `.md` files before every commit.

---

## Known Remaining Items

| Item                                       | Status              | Notes                                                                                  |
| ------------------------------------------ | ------------------- | -------------------------------------------------------------------------------------- |
| African language translations              | Stub (`{}`)         | Falls back to English; full translations can be added to `sw.json`, `ha.json`, etc.    |
| `.holla-button`, `.holla-logo` CSS classes | Internal only       | Class names not user-visible; renaming would require a large diff across ~80 files     |
| `hollaex-web-lib` npm package              | Vendored dependency | Used for remote plugin component loading; can be replaced if a fork is published       |
| `HOLLAEX_TOKEN.*` string keys in `en.json` | Key names only      | Content is already AZIX-branded; key names are internal identifiers not shown to users |
| Backend deployment                         | Pending             | Backend targets Railway; see `server/` directory                                       |
| Google OAuth client ID                     | Config-dependent    | Enabled when `constants.google_oauth.client_id` is set via admin panel                 |
| Cloudflare Turnstile                       | Config-dependent    | Enabled when `constants.cloudflare_turnstile.site_key` is set via admin panel          |

---

_AZIX Exchange — African Zone for International Exchange_
_[azix.world](https://azix.world) · [github.com/wangai003](https://github.com/wangai003) · ochandaemmanuel25@gmail.com_

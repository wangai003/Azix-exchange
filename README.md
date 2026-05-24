# AZIX Exchange

**African Zone for International Exchange** — a private equity crypto exchange built for Africa and beyond.

AZIX Exchange is a full-stack crypto trading platform providing exchange and trading, user management, onboarding, and a wallet system. It runs as a standalone node with a React frontend and a Node.js/Express backend.

> **Website:** [azix.world](https://azix.world)
> **GitHub:** [github.com/wangai003/Azix-exchange](https://github.com/wangai003/Azix-exchange)

---

## Get Started

```bash
git clone https://github.com/wangai003/Azix-exchange.git
cd Azix-exchange
```

### Frontend (Web)

```bash
cd web
npm install
npm start
```

> Requires Node v20. Set `NODE_OPTIONS=--openssl-legacy-provider` if you see OpenSSL errors.

### Backend (Server)

```bash
cd server
npm install
npm start
```

> Requires PostgreSQL and Redis running locally. See `server/config/` for environment variables.

---

## Project Structure

```
Azix-exchange/
├── web/        # React frontend (CRA)
├── server/     # Express + Swagger backend
├── plugins/    # Plugin development workspace
└── test/       # Playwright + Cypress test suites
```

---

## Developers

- [web/](web/) — Frontend UI/UX source code
- [server/](server/) — Backend API, WebSocket, and database
- [plugins/](plugins/) — Custom plugin development
- [server/utils/hollaex-network-lib/](server/utils/hollaex-network-lib/) — Network communication library
- [server/utils/hollaex-tools-lib/](server/utils/hollaex-tools-lib/) — Server-side utility functions
- [test/](test/) — End-to-end test suite (Playwright)

---

## Brand

| | |
|---|---|
| Primary color | Gold `#C9A84C` |
| Background | Black `#0A0C0A` |
| Accent | Green `#2D7A3A` |

---

## Community & Support

- Website: [azix.world](https://azix.world)
- Twitter / X: [@azixworld](https://x.com/azixworld)
- Telegram: [t.me/azixworld](https://t.me/azixworld)
- Instagram: [@azixworld](https://instagram.com/azixworld)
- LinkedIn: [linkedin.com/company/azixworld](https://linkedin.com/company/azixworld)

---

*AZIX Exchange — African Zone for International Exchange*

# AZIX Exchange — Server

The AZIX Exchange server is built on Express + Swagger and provides REST API and WebSocket communication for the AZIX web client and any other API consumers.

Main third-party libraries used throughout the server:

- [Express v4.16.2](https://expressjs.com/en/api.html)
- [SwaggerUI v2.0.0](https://swagger.io/docs/specification/2-0/basic-structure/)
- [Sequelize v4.37.7](https://sequelize.org/v4/)

> **GitHub:** [github.com/wangai003/Azix-exchange](https://github.com/wangai003/Azix-exchange)
> **Website:** [azix.world](https://azix.world)

---

## API

All folders and files related to the RESTful API are in the `api` directory:

```
api/
├── controllers/
├── helpers/
└── swagger/
```

### Controllers

Each file in `controllers/` maps to a domain of the API:

- `admin.js`
- `deposit.js`
- `notification.js`
- `order.js`
- `otp.js`
- `public.js`
- `tier.js`
- `trade.js`
- `user.js`
- `withdrawal.js`

### Helpers

The `helpers/` folder holds shared utility functions used by the controllers above. Add any custom helper functions here when extending the server.

### Swagger

`swagger/swagger.yaml` contains the full OpenAPI 2.0 specification for the REST API.

### Other Relevant Directories

- **`db/`** — Database functions, migration files, models, seeders, triggers, and Redis clients. Database engine: PostgreSQL.
- **`mail/`** — Everything related to transactional emails.
  - `strings/` — Email copy separated by language (e.g. `en.js`).
  - `templates/` — Email templates separated by type (e.g. `welcome.js`, `deposit.js`).
  - Email library: [Nodemailer](https://nodemailer.com/).
- **`config/`** — Configuration files for the database, Redis, and logger.

---

## WebSocket

All WebSocket-related files are in the `ws/` directory.

### Structure

| File | Purpose |
|---|---|
| `channel.js` | Manages all WebSocket channels connected to the server |
| `hub.js` | Manages the server's upstream network connection |
| `index.js` | Handles all incoming client WebSocket connections |
| `publicData.js` | Holds public orderbook and trade data |
| `server.js` | WebSocket server initialisation |
| `sub.js` | Handles messages received from subscribers |
| `chat/` | Files related to the chat feature |

### How it works

The AZIX WebSocket server acts as a proxy between clients and the upstream network. Clients cannot connect if the server is not connected to the network. If the upstream connection drops, all client connections are dropped too — the hub reconnects automatically.

All clients must send at least one message per minute or their connection will be closed.

### Usage

#### Connecting

```javascript
const WebSocket = require('ws');
const API_URL = 'https://api.azix.world';

// Public connection
const publicSocket = new WebSocket(`${API_URL}/stream`);
```

#### Authentication

For private events, authenticate in one of two ways:

**Query parameters on connect:**
```javascript
// Bearer Token
const privateSocket = new WebSocket(`${API_URL}/stream?authorization=${BEARER_TOKEN}`);

// HMAC Authentication
const privateSocket = new WebSocket(
  `${API_URL}/stream?api-key=${API_KEY}&api-signature=${API_SIGNATURE}&api-expires=${API_EXPIRES}`
);
```

**Auth message after connect:**
```javascript
// Bearer Token
privateSocket.send(JSON.stringify({
  op: 'auth',
  args: [{ authorization: BEARER_TOKEN }]
}));

// HMAC Authentication
privateSocket.send(JSON.stringify({
  op: 'auth',
  args: [{
    'api-key': API_KEY,
    'api-signature': API_SIGNATURE,
    'api-expires': API_EXPIRES
  }]
}));
```

#### Subscribing

Available events:

| Event | Auth required |
|---|---|
| `orderbook` | No |
| `trade` | No |
| `wallet` | Yes |
| `order` | Yes |

```javascript
// Public events (optionally scoped to a symbol)
publicSocket.on('open', () => {
  publicSocket.send(JSON.stringify({
    op: 'subscribe',
    args: ['orderbook', 'trade:xht-usdt']
  }));
});

// Private events
privateSocket.on('open', () => {
  privateSocket.send(JSON.stringify({
    op: 'subscribe',
    args: ['wallet', 'order']
  }));
});
```

#### Unsubscribing

```javascript
publicSocket.send(JSON.stringify({
  op: 'unsubscribe',
  args: ['orderbook', 'trade:xht-usdt']
}));
```

#### Receiving Data

```javascript
socket.on('message', (data) => {
  data = JSON.parse(data);
  console.log(data);
});
```

**Sample responses:**

- **`orderbook`**
  ```json
  {
    "topic": "orderbook",
    "action": "partial",
    "symbol": "xht-usdt",
    "data": {
      "bids": [[0.1, 0.1]],
      "asks": [[1, 1]],
      "timestamp": "2020-12-15T06:45:27.766Z"
    },
    "time": 1608015328
  }
  ```

- **`trade`**
  ```json
  {
    "topic": "trade",
    "action": "partial",
    "symbol": "xht-usdt",
    "data": [
      { "size": 0.012, "price": 300, "side": "buy", "timestamp": "2020-12-15T07:25:28.887Z" }
    ],
    "time": 1608015328
  }
  ```

- **`wallet`**
  ```json
  {
    "topic": "wallet",
    "action": "partial",
    "user_id": 1,
    "data": {
      "usdt_balance": 1,
      "usdt_available": 1,
      "btc_balance": 1,
      "btc_available": 1,
      "updated_at": "2020-12-15T08:41:24.048Z"
    },
    "time": 1608021684
  }
  ```

- **`order`** — `action` can be `partial` (initial snapshot), `insert` (new order), or `update` (status change). Order `status` values: `new`, `pfilled`, `filled`, `canceled`.

  ```json
  {
    "topic": "order",
    "action": "partial",
    "user_id": 1,
    "data": [
      {
        "id": "7d3d9545-b7e6-4e7f-84a0-a39efa4cb173",
        "side": "buy",
        "symbol": "xht-usdt",
        "type": "limit",
        "size": 0.1,
        "filled": 0,
        "price": 1,
        "stop": null,
        "status": "new",
        "fee": 0,
        "fee_coin": "xht",
        "fee_structure": { "maker": 0.1, "taker": 0.1 },
        "created_at": "2020-11-30T07:45:43.819Z",
        "created_by": 1
      }
    ],
    "time": 1608022610
  }
  ```

---

## Plugins

Plugins are managed within `plugins.js`. Key libraries:

- [eval v0.1.4](https://github.com/pierrec/node-eval) — Executes plugin scripts in an isolated context
- [Express v4.16.2](https://expressjs.com/en/api.html)

### How it works

Plugins run in their own process and can be installed, updated, or uninstalled without restarting the API server. They are stored in the database in the `Plugin` table.

### Plugin structure

```json
{
  "version": 1,
  "name": "string",
  "author": "string",
  "bio": "string",
  "enabled": true,
  "description": "string",
  "documentation": "string",
  "logo": "string",
  "icon": "string",
  "url": "string",
  "meta": {},
  "prescript": { "run": "string", "install": [] },
  "postscript": { "run": "string" },
  "script": "string",
  "admin_view": "string",
  "web_view": []
}
```

### Meta

Use `meta` to store plugin-specific config values (e.g. API keys):

```javascript
// In the plugin script, meta values are available as:
const { key, secret } = meta;
```

### Available libraries in plugin scripts

| Variable | Library |
|---|---|
| `toolsLib` | Tools Library |
| `app` | Express |
| `lodash` | Lodash |
| `expressValidator` | Express Validator |
| `loggerPlugin` | Winston logger |
| `multer` | Multer |

For additional npm packages, list them in `prescript.install`:

```javascript
{
  "prescript": { "install": ["npm-library"] }
}
// Access via:
const npmLibrary = installedLibraries['npm-library'];
```

### Scripts

Scripts must be written in ES6+ (they are minified before installation). All plugin endpoints must be prefixed with `/plugins`:

```javascript
app.get('/plugins/say-hi', (req, res) => {
  res.send('hi');
});
```

### web_view

Remote components loaded at runtime to add UI to the client:

```javascript
{
  "web_view": [
    {
      "meta": {},
      "target": "string",     // Target DOM element id
      "src": "string",        // URL of a CommonJS module bundle
      "props": [
        { "store_key": "string", "key": "string" }
      ]
    }
  ]
}
```

**`meta` special values for new pages:**

```javascript
{
  "meta": {
    "is_page": true,
    "path": "/my-page",
    "icon_id": "string",
    "string_id": "string",
    "hide_from_sidebar": false,
    "hide_from_appbar": false,
    "hide_from_menulist": false
  }
}
```

**Shared dependencies** (mark as external in your bundle to avoid duplication):

| Package | Version |
|---|---|
| `react` | 16.13.1 |
| `redux` | 4.0.1 |
| `react-redux` | 6.0.1 |
| `redux-form` | 8.1.0 |
| `prop-types` | 15.7.2 |
| `react-svg` | 11.2.2 |
| `classnames` | 2.2.6 |
| `react-device-detect` | 1.6.2 |

---

## Plugin API Endpoints

| Method | Path | Description | Auth |
|---|---|---|---|
| `GET` | `/plugins` | Paginated list of installed plugins. Query: `limit`, `page`, `search` | Admin |
| `POST` | `/plugins` | Install a new plugin | Admin |
| `PUT` | `/plugins` | Update an existing plugin to a new version | Admin |
| `DELETE` | `/plugins` | Uninstall a plugin. Query: `name` | Admin |
| `GET` | `/plugins/enable` | Enable a plugin. Query: `name` | Admin |
| `GET` | `/plugins/disable` | Disable a plugin. Query: `name` | Admin |
| `GET` | `/plugins/script` | Get script fields for a plugin. Query: `name` | Admin |
| `GET` | `/plugins/meta` | Get meta values for a plugin. Query: `name` | Admin |
| `PUT` | `/plugins/meta` | Update meta values for a plugin | Admin |

**`PUT /plugins/meta` body:**
```json
{
  "name": "string",
  "meta": {
    "key": "value"
  }
}
```
Only keys present in both the existing meta and the request body are updated — it does not replace the entire meta object.

---

*AZIX Exchange — African Zone for International Exchange*
*[azix.world](https://azix.world) · [github.com/wangai003](https://github.com/wangai003)*

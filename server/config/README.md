# AZIX Exchange — Server Config

Place server configuration files in this directory.

## Environment Variables

Copy `.env.example` to `.env` and fill in the required values before starting the server.

Key variables:

| Variable | Description |
|---|---|
| `DB_URI` | PostgreSQL connection string |
| `REDIS_URI` | Redis connection string |
| `SECRET` | JWT signing secret |
| `API_HOST` | Public API hostname (e.g. `api.azix.world`) |
| `NODE_ENV` | `development` or `production` |

---

*AZIX Exchange — [azix.world](https://azix.world)*

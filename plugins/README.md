# AZIX Exchange — Plugins

This directory is the plugin development workspace for AZIX Exchange.

## Usage

1. Install dependencies:

	```bash
	npm install
	cd web/ && npm install
	```

2. Build a plugin by running:

	```bash
	npm run build --plugin=<PLUGIN_NAME>
	```

	This generates a minified plugin JSON object ready to be installed via the AZIX admin panel.

### Example

```bash
npm run build --plugin=hello-exchange
```

Output:

```json
{
	"name": "hello-exchange",
	"version": 1,
	"type": null,
	"author": "AZIX",
	"bio": "Say hello from the exchange",
	"description": "Demo plugin for proof of concept",
	"documentation": null,
	"logo": null,
	"icon": null,
	"url": null,
	"meta": {
		"private": {
			"type": "string",
			"required": false,
			"description": "A secret",
			"value": "hello exchange..."
		}
	},
	"public_meta": {
		"public": {
			"type": "string",
			"required": false,
			"description": "Not a secret",
			"value": "Hello Exchange!"
		}
	},
	"prescript": {
		"install": ["hello-world-npm"],
		"run": null
	},
	"postscript": {
		"run": null
	},
	"web_view": null,
	"admin_view": null,
	"script": "const helloWorld=installedLibraries[\"hello-world-npm\"];app.get(\"/plugins/hello-exchange\",(e,l)=>l.json({publicMessage:publicMeta.public.value,privateMessage:meta.private.value,libraryMessage:helloWorld(),timestamp:moment().toISOString()}));"
}
```

## Installing a Plugin

Once built, install the plugin via the AZIX admin panel at `/admin/plugins`, or use the API:

```bash
curl -X POST https://api.azix.world/v2/plugins \
  -H "Authorization: Bearer <ADMIN_TOKEN>" \
  -H "Content-Type: application/json" \
  -d @plugin.json
```

## More Information

See [server/README.md](../server/README.md#plugins) for the full plugin API reference and plugin script documentation.

---

*AZIX Exchange — [azix.world](https://azix.world) · [github.com/wangai003](https://github.com/wangai003)*

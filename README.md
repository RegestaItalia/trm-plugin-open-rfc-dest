# trm-plugin-open-rfc-dest

Experimental connection plugin for `trm-client` that talks to SAP systems
through [`open-rfc`](https://www.npmjs.com/package/open-rfc), without requiring
the SAP NW RFC SDK used by `node-rfc`.

The plugin behaves like TRM's standard RFC connection and uses the same fields:

- application server (`ashost`)
- instance number (`sysnr`)
- SAProuter string (`saprouter`, optional)
- client, user, password, and language

## Installation

Install the plugin where `trm-client` can discover TRM plugins:

```sh
npm install -g trm-plugin-open-rfc-dest
```

The plugin registers as the standard `RFC` connection type, so existing RFC
destinations and aliases can be reused without changing their saved type or
connection fields.

If both this plugin and a global `node-rfc` installation are present, the
built-in `node-rfc` connection takes precedence. To use `open-rfc`, remove the
global `node-rfc` installation; no saved RFC destinations need to be changed.

## Status

This package is experimental because `open-rfc` is not yet considered
production-ready. Use the standard `RFC` connection backed by `node-rfc` for
production workloads.

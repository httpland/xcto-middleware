# xcto-middleware

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/xcto_middleware)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/xcto_middleware/mod.ts)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/httpland/xcto-middleware)](https://github.com/httpland/xcto-middleware/releases)
[![codecov](https://codecov.io/github/httpland/xcto-middleware/branch/main/graph/badge.svg?token=MNFZEQH8OK)](https://codecov.io/gh/httpland/xcto-middleware)
[![GitHub](https://img.shields.io/github/license/httpland/xcto-middleware)](https://github.com/httpland/xcto-middleware/blob/main/LICENSE)

[![test](https://github.com/httpland/xcto-middleware/actions/workflows/test.yaml/badge.svg)](https://github.com/httpland/xcto-middleware/actions/workflows/test.yaml)
[![NPM](https://nodei.co/npm/@httpland/xcto-middleware.png?mini=true)](https://nodei.co/npm/@httpland/xcto-middleware/)

HTTP XCTO(`X-Content-Type-Options`) middleware.

Compliant with
[Fetch, 3.5. `X-Content-Type-Options` header](https://fetch.spec.whatwg.org/#x-content-type-options-header).

## Middleware

For a definition of Universal HTTP middleware, see the
[http-middleware](https://github.com/httpland/http-middleware) project.

## Usage

Middleware adds the `X-Content-Type-Options` header to the response.

```ts
import {
  type Handler,
  xcto,
} from "https://deno.land/x/xcto_middleware@$VERSION/mod.ts";
import { assert } from "https://deno.land/std/testing/asserts.ts";

declare const request: Request;
declare const handler: Handler;

const middleware = xcto();
const response = await middleware(request, handler);

assert(response.headers.has("x-content-type-options"));
```

yield:

```http
X-Content-Type-Options: nosniff
```

## Conditions

Middleware is executed if all of the following conditions are met:

- Response does not include `X-Content-Type-Options` header

## Effects

Middleware may make changes to the following elements of the HTTP message.

- HTTP Headers
  - X-Content-Type-Options

## API

All APIs can be found in the
[deno doc](https://doc.deno.land/https/deno.land/x/xcto_middleware/mod.ts).

## License

Copyright © 2023-present [httpland](https://github.com/httpland).

Released under the [MIT](./LICENSE) license

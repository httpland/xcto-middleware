// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

import { Handler, Middleware, withHeader } from "./deps.ts";
import { Directive, Header } from "./constants.ts";

/** Create `X-Content-Type-Options` header middleware.
 *
 * Add `X-Content-Type-Options` header field to `Response`.
 * ```http
 * X-Content-Type-Options: nosniff
 * ```
 *
 * @example
 * ```ts
 * import {
 *   type Handler,
 *   xcto,
 * } from "https://deno.land/x/xcto_middleware@$VERSION/mod.ts";
 * import { assert } from "https://deno.land/std/testing/asserts.ts";
 *
 * declare const request: Request;
 * declare const handler: Handler;
 *
 * const middleware = xcto();
 * const response = await middleware(request, handler);
 *
 * assert(response.headers.has("x-content-type-options"));
 * ```
 */
export function xcto(): Middleware {
  return xctoMiddleware;
}

export async function xctoMiddleware(
  request: Request,
  next: Handler,
): Promise<Response> {
  const response = await next(request);

  if (response.headers.has(Header.XContentTypeOptions)) return response;

  return withHeader(response, Header.XContentTypeOptions, Directive.Nosniff);
}

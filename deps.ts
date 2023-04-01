// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

export {
  type Handler,
  type Middleware,
} from "https://deno.land/x/http_middleware@1.0.0/mod.ts";

interface Cloneable {
  clone(): this;
}

/** An object which contains a `headers` property which has a value of an
 * instance of {@linkcode Headers}, like {@linkcode Request} and
 * {@linkcode Response}. */
interface Headered {
  readonly headers: Headers;
}

export function withHeader<T extends Headered & Cloneable>(
  target: T,
  field: string,
  fieldValue: string,
): T {
  if (target.headers.has(field)) return target;

  target = target.clone();
  target.headers.set(field, fieldValue);

  return target;
}

// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

import { withHeader } from "./deps.ts";
import { Directive, Header } from "./constants.ts";

/** Ensure that `X-Content-Type-Options` header exists.  */
export function withXcto(response: Response): Response {
  return withHeader(response, Header.XContentTypeOptions, Directive.Nosniff);
}

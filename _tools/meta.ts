import { BuildOptions } from "https://deno.land/x/dnt@0.33.1/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},
  compilerOptions: {
    lib: ["dom", "esnext"],
  },
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "@httpland/xcto-middleware",
    version,
    description: "HTTP XCTO(X-Content-Type-Options) middleware",
    keywords: [
      "http",
      "middleware",
      "header",
      "xcto",
      "x-content-type-options",
      "nosniiff",
      "security",
      "fetch-api",
    ],
    license: "MIT",
    homepage: "https://github.com/httpland/xcto-middleware",
    repository: {
      type: "git",
      url: "git+https://github.com/httpland/xcto-middleware.git",
    },
    bugs: {
      url: "https://github.com/httpland/xcto-middleware/issues",
    },
    sideEffects: false,
    type: "module",
    publishConfig: {
      access: "public",
    },
  },
  packageManager: "pnpm",
  mappings: {
    "https://deno.land/x/http_middleware@1.0.0/mod.ts": {
      name: "@httpland/http-middleware",
      version: "1.0.0",
    },
    "https://deno.land/x/http_utils@1.0.0/message.ts": {
      name: "@httpland/http-utils",
      version: "1.0.0",
      subPath: "message.js",
    },
  },
});

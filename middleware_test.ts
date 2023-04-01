import { xcto, xctoMiddleware } from "./middleware.ts";
import {
  assert,
  describe,
  Directive,
  equalsResponse,
  Header,
  it,
} from "./_dev_deps.ts";

describe("xcto", () => {
  it("should equal", () => {
    assert(xcto() === xctoMiddleware);
  });
});

describe("xctoMiddleware", () => {
  it("should return response what include xcto header", async () => {
    const response = await xctoMiddleware(
      new Request("test:"),
      () => new Response(),
    );

    assert(
      await equalsResponse(
        response,
        new Response(null, {
          headers: { [Header.XContentTypeOptions]: Directive.Nosniff },
        }),
        true,
      ),
    );
  });
});

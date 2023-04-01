import { withXcto } from "./transform.ts";
import {
  assert,
  describe,
  Directive,
  equalsResponse,
  Header,
  it,
} from "./_dev_deps.ts";

describe("withXcto", () => {
  it("should return response what include xcto header", async () => {
    const response = withXcto(new Response());

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

  it("should return same response if the header include xcto yet", () => {
    const initResponse = new Response(null, {
      headers: { [Header.XContentTypeOptions]: "" },
    });
    const response = withXcto(initResponse);

    assert(response === initResponse);
  });
});

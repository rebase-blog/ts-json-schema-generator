import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - expose-all-topref-true",
    assertConfigSchema("expose-all-topref-true", {
        type: "MyObject",
        expose: "all",
        topRef: true,
        jsDoc: "none",
    }),
);

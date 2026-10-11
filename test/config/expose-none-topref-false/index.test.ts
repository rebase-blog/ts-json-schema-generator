import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - expose-none-topref-false",
    assertConfigSchema("expose-none-topref-false", {
        type: "MyObject",
        expose: "none",
        topRef: false,
        jsDoc: "none",
    }),
);

import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - expose-export-topref-false",
    assertConfigSchema("expose-export-topref-false", {
        type: "MyObject",
        expose: "export",
        topRef: false,
        jsDoc: "none",
    }),
);

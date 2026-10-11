import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - jsdoc-hidden",
    assertConfigSchema("jsdoc-hidden", {
        type: "MyObject",
        expose: "export",
        topRef: true,
        jsDoc: "extended",
    }),
);

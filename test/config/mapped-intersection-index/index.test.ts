import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - mapped-intersection-index",
    assertConfigSchema("mapped-intersection-index", {
        type: "MyObject",
        additionalProperties: true,
    }),
);

import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - mapped-intersection",
    assertConfigSchema("mapped-intersection", {
        type: "MyObject",
        additionalProperties: true,
    }),
);

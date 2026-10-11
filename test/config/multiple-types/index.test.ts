import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - multiple-types",
    assertConfigSchema("multiple-types", {
        type: ["MyObject1", "MyObject2"],
    }),
);

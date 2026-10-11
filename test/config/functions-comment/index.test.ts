import { it } from "node:test";
import { assertConfigSchema } from "../../utils.js";

it(
    "config - functions-comment",
    assertConfigSchema("functions-comment", {
        type: "MyType",
        functions: "comment",
    }),
);

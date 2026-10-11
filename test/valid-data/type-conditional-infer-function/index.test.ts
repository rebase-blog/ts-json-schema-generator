import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-conditional-infer-function",
    assertValidSchema("type-conditional-infer-function", "FuncParams"),
);

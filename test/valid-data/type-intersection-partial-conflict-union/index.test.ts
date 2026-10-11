import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-intersection-partial-conflict-union",
    assertValidSchema("type-intersection-partial-conflict-union", "MyType"),
);

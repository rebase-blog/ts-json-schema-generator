import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-intersection-union-primitive",
    assertValidSchema("type-intersection-union-primitive", "MyType"),
);

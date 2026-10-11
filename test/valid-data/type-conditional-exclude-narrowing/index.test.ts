import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-conditional-exclude-narrowing",
    assertValidSchema("type-conditional-exclude-narrowing", "MyObject"),
);

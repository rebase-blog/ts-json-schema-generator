import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-typeof-class-static-property",
    assertValidSchema("type-typeof-class-static-property", "MyType"),
);

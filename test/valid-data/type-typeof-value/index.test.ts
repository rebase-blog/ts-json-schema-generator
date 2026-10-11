import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-typeof-value", assertValidSchema("type-typeof-value", "MyType"));

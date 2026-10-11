import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-conditional-infer", assertValidSchema("type-conditional-infer", "MyType"));

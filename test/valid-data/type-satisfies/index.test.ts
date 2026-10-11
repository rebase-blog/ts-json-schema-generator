import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-satisfies", assertValidSchema("type-satisfies", "MyType"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-typeof", assertValidSchema("type-typeof", "MyType"));

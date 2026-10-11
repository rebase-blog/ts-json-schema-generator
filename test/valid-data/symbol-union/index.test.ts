import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - symbol-union", assertValidSchema("symbol-union", "MyType"));

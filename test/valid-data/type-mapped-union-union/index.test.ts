import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-union-union", assertValidSchema("type-mapped-union-union", "MyType"));

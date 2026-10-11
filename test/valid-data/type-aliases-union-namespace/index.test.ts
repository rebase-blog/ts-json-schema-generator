import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-aliases-union-namespace", assertValidSchema("type-aliases-union-namespace", "MyModel"));

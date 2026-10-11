import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-aliases-object", assertValidSchema("type-aliases-object", "MyAlias"));

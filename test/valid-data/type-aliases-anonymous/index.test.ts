import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-aliases-anonymous", assertValidSchema("type-aliases-anonymous", "MyObject"));

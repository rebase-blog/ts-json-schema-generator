import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-enum", assertValidSchema("type-mapped-enum", "MyObject"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-exclude", assertValidSchema("type-mapped-exclude", "MyObject"));

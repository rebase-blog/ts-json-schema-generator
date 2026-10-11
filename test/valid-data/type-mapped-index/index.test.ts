import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-index", assertValidSchema("type-mapped-index", "MyObject"));

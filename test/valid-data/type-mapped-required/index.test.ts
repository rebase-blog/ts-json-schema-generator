import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-required", assertValidSchema("type-mapped-required", "MyObject"));

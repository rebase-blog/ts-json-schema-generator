import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-union-intersection", assertValidSchema("type-mapped-union-intersection", "MyObject"));

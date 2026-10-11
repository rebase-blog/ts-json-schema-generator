import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - generic-recursive", assertValidSchema("generic-recursive", "MyObject"));

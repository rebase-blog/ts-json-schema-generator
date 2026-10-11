import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - generic-hell", assertValidSchema("generic-hell", "MyObject"));

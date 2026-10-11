import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - generic-default", assertValidSchema("generic-default", "MyObject"));

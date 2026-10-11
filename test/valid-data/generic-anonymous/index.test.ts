import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - generic-anonymous", assertValidSchema("generic-anonymous", "MyObject"));

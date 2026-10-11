import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - generic-default-conditional", assertValidSchema("generic-default-conditional", "MyObject"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - structure-recursion", assertValidSchema("structure-recursion", "MyObject"));

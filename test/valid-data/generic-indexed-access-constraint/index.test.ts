import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("generic-indexed-access-constraint", assertValidSchema("generic-indexed-access-constraint", "MyObject"));

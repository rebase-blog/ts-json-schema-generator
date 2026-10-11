import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - enums-member", assertValidSchema("enums-member", "MyObject"));

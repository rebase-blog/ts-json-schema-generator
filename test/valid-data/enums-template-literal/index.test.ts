import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - enums-template-literal", assertValidSchema("enums-template-literal", "MyObject"));

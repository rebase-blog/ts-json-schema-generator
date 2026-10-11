import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-conditional-jsdoc", assertValidSchema("type-conditional-jsdoc", "MyObject"));

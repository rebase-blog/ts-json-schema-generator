import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - string-template-literals", assertValidSchema("string-template-literals", "MyObject"));

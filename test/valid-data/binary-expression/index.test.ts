import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - binary-expression", assertValidSchema("binary-expression", "MyObject"));

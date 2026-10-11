import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - annotation-ref", assertValidSchema("annotation-ref", "MyObject"));

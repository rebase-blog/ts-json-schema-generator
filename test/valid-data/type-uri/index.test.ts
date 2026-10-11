import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-uri", assertValidSchema("type-uri", "MyObject"));

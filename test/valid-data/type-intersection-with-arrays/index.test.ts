import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-intersection-with-arrays", assertValidSchema("type-intersection-with-arrays", "*"));

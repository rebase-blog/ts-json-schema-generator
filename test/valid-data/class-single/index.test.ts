import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - class-single", assertValidSchema("class-single", "MyObject"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - never", assertValidSchema("never", "BasicNever"));

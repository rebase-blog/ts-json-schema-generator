import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - keyof-typeof-enum", assertValidSchema("keyof-typeof-enum", "MyObject"));

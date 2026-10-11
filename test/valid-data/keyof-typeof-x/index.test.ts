import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - keyof-typeof-x", assertValidSchema("keyof-typeof-x", "MyType"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - array-function-generics", assertValidSchema("array-function-generics", "*"));

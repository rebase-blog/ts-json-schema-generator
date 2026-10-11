import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - array-literal-spread", assertValidSchema("array-literal-spread", "MyType"));

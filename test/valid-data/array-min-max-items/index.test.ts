import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - array-min-max-items", assertValidSchema("array-min-max-items", "MyType"));

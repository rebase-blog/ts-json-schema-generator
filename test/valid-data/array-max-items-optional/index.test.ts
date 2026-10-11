import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - array-max-items-optional", assertValidSchema("array-max-items-optional", "MyType"));

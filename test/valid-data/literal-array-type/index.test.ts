import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - literal-array-type", assertValidSchema("literal-array-type", "MyType"));

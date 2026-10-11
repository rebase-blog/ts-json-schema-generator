import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - shorthand-array", assertValidSchema("shorthand-array", "MyType"));

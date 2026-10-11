import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - lowercase", assertValidSchema("lowercase", "MyType"));

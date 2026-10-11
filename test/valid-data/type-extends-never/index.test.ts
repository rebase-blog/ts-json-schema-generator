import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-extends-never", assertValidSchema("type-extends-never", "MyType"));

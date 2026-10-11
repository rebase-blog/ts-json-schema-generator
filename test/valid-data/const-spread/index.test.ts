import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - const-spread", assertValidSchema("const-spread", "MyType"));

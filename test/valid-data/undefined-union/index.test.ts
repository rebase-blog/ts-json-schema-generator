import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - undefined-union", assertValidSchema("undefined-union", "MyType"));

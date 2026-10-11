import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - enums-string", assertValidSchema("enums-string", "Enum"));

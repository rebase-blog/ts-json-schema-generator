import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - enums-number", assertValidSchema("enums-number", "Enum"));

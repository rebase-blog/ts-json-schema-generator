import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - enums-mixed", assertValidSchema("enums-mixed", "Enum"));

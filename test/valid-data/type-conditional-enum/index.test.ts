import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-conditional-enum", assertValidSchema("type-conditional-enum", "IParameter"));

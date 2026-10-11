import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-union", assertValidSchema("type-union", "TypeUnion"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-annotated-string", assertValidSchema("type-mapped-annotated-string", "*"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-exported-aliases", assertValidSchema("type-mapped-exported-aliases", "*"));

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-mapped-index-as", assertValidSchema("type-mapped-index-as", "MyObject"));

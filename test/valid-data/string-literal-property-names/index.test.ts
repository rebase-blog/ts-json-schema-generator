import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - string-literal-property-names", assertValidSchema("string-literal-property-names", "*"));

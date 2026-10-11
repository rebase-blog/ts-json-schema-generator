import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - class-extra-props", assertValidSchema("class-extra-props", "MyObject"));

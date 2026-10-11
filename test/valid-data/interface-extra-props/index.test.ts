import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - interface-extra-props", assertValidSchema("interface-extra-props", "MyObject"));

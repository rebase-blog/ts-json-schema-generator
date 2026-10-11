import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - promise-extensions", assertValidSchema("promise-extensions", "*"));

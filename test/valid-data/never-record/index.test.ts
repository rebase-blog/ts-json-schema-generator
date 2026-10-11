import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - never-record", assertValidSchema("never-record", "Mapped"));

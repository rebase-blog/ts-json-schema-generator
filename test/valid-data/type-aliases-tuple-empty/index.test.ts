import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-aliases-tuple-empty", assertValidSchema("type-aliases-tuple-empty", "MyTuple"));

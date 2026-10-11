import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - type-tuple-nested-rest-uniform", assertValidSchema("type-tuple-nested-rest-uniform", "MyType"));

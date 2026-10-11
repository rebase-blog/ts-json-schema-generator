import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test("valid-data - annotation-id", assertValidSchema("annotation-id", "MyObject", { schemaId: "Test" }));

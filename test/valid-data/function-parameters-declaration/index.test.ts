import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - function-parameters-declaration",
    assertValidSchema("function-parameters-declaration", "myFunction"),
);

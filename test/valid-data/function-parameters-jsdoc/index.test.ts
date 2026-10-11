import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - function-parameters-jsdoc",
    assertValidSchema("function-parameters-jsdoc", "myFunction", { jsDoc: "basic" }),
);

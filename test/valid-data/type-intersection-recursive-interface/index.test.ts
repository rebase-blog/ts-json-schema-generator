import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-intersection-recursive-interface",
    assertValidSchema("type-intersection-recursive-interface", "Intersection"),
);

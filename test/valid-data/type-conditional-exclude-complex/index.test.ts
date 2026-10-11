import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-conditional-exclude-complex",
    assertValidSchema("type-conditional-exclude-complex", "BaseAxisNoSignals"),
);

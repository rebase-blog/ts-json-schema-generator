import { assertValidSchema } from "../../../utils.js";
import { test } from "node:test";

test(
    "valid-data - multiple-roots2/schema",
    assertValidSchema("multiple-roots2/schema", undefined, undefined, undefined),
);

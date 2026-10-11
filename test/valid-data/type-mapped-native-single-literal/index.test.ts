import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - type-mapped-native-single-literal",
    assertValidSchema("type-mapped-native-single-literal", "MyObject"),
);

import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - annotation-deprecated",
    assertValidSchema("annotation-deprecated", "MyObject", { jsDoc: "basic", extraTags: ["deprecationMessage"] }),
);

test(
    "valid-data - annotation-deprecated",
    assertValidSchema("annotation-deprecated", "MyObject", { extraTags: ["deprecationMessage"] }),
);

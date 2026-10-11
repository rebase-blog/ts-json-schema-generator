import { assertValidSchema } from "../../utils.js";
import { test } from "node:test";

test(
    "valid-data - discriminator",
    assertValidSchema("discriminator", "Animal", { jsDoc: "basic", discriminatorType: "open-api" }),
);

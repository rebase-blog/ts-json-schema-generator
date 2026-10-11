import { it } from "node:test";
import type { BaseType } from "../../../index.js";
import { FunctionType } from "../../../src/Type/FunctionType.js";
import type { Definition } from "../../../src/Schema/Definition.js";
import type { SubTypeFormatter } from "../../../src/SubTypeFormatter.js";
import { assertConfigSchema } from "../../utils.js";

class ExampleFunctionTypeFormatter implements SubTypeFormatter {
    public supportsType(type: BaseType): boolean {
        return type instanceof FunctionType;
    }
    public getDefinition(_type: FunctionType): Definition {
        return {
            type: "object",
            properties: {
                isFunction: {
                    type: "boolean",
                    const: true,
                },
            },
        };
    }
    public getChildren(_type: FunctionType): BaseType[] {
        return [];
    }
}

it(
    "config - custom-formatter-configuration",
    assertConfigSchema(
        "custom-formatter-configuration",
        {
            type: "MyObject",
        },
        false,
        (formatter) => formatter.addTypeFormatter(new ExampleFunctionTypeFormatter()),
    ),
);

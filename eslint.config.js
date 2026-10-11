import neostandard from 'newneostandard'
import tseslint from 'typescript-eslint'

// Local rule: forbid spaces around `|` and `&` in TypeScript union and
// intersection types, so `A|B` is required over `A | B`. Only flags
// operators whose operands share a line, leaving multiline unions (one
// member per line) untouched.
const localPlugin = {
    rules: {
        'union-spacing': {
            meta: {
                type: 'layout',
                fixable: 'whitespace',
                schema: [],
                messages: {
                    before: "Unexpected space before '{{op}}' in type.",
                    after: "Unexpected space after '{{op}}' in type."
                }
            },
            create (context) {
                const sc = context.sourceCode
                const check = (node) => {
                    for (const member of node.types) {
                        const op = sc.getTokenBefore(member)
                        if (!op) continue
                        if (op.value !== '|' && op.value !== '&') continue
                        const prev = sc.getTokenBefore(op)
                        const next = sc.getTokenAfter(op)
                        // Only enforce when the operator sits inline
                        // between two members on a single line; leave
                        // multiline unions (leading/trailing pipe) be.
                        const inline = prev && next &&
                            prev.loc.end.line === op.loc.start.line &&
                            op.loc.end.line === next.loc.start.line
                        if (!inline) continue
                        if (prev.range[1] !== op.range[0]) {
                            context.report({
                                node: op,
                                messageId: 'before',
                                data: { op: op.value },
                                fix: (fixer) => fixer.removeRange(
                                    [prev.range[1], op.range[0]]
                                )
                            })
                        }
                        if (op.range[1] !== next.range[0]) {
                            context.report({
                                node: op,
                                messageId: 'after',
                                data: { op: op.value },
                                fix: (fixer) => fixer.removeRange(
                                    [op.range[1], next.range[0]]
                                )
                            })
                        }
                    }
                }
                return {
                    TSUnionType: check,
                    TSIntersectionType: check
                }
            }
        }
    }
}

export default tseslint.config(
    {
        ignores: [
            'dist/**',
            'cjs/**',
            'build/**',
            'bin/ts-json-schema-generator.js',
            // Test fixtures are generator inputs, not source. Only lint
            // the test files themselves and the shared test utils.
            'test/**/*.ts',
            '!test/**/*.test.ts',
            '!test/utils.ts'
        ]
    },

    // JavaScript Standard Style, TypeScript-aware (flat-config successor
    // to `eslint-config-standard`). Stylistic rules live under the
    // `@stylistic/` namespace.
    ...neostandard({ ts: true }),

    // Standard Style overrides, applied to every file.
    {
        rules: {
            '@stylistic/operator-linebreak': 'off',
            '@stylistic/multiline-ternary': 'off',
            '@stylistic/no-multiple-empty-lines': ['error', {
                max: 1,
                maxEOF: 1
            }],
            '@stylistic/indent': ['error', 4, {
                SwitchCase: 1,
                ignoredNodes: ['TemplateLiteral *']
            }],
            '@stylistic/comma-dangle': 'off',
            '@stylistic/no-multi-spaces': ['error', {
                ignoreEOLComments: true
            }]
        }
    },

    // Type-aware `@typescript-eslint/recommended` plus our TypeScript
    // overrides, scoped to TypeScript files where the parser and plugin
    // are active.
    {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [tseslint.configs.recommendedTypeChecked],
        plugins: { local: localPlugin },
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.eslint.json',
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/consistent-type-imports': ['error', {
                prefer: 'type-imports'
            }],
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/no-require-imports': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true
            }],
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
            'no-alert': 'error',
            'prefer-const': 'error',
            'no-return-assign': 'error',
            'no-useless-call': 'error',
            'no-shadow': 'error',
            'no-useless-concat': 'error',
            'no-undef': 'off',
            'no-prototype-builtins': 'off',
            // No space around the colon in type annotations
            // (`const x:T`, params, returns). Keep `=>` in function
            // types spaced via the arrow override.
            '@stylistic/type-annotation-spacing': ['error', {
                before: false,
                after: false,
                overrides: { arrow: { before: true, after: true } }
            }],
            // No space around the colon in object and type-literal
            // members (`{ a:1 }`, `classes?:string[]`).
            '@stylistic/key-spacing': ['error', {
                beforeColon: false,
                afterColon: false,
                mode: 'strict'
            }],
            // Let `local/union-spacing` own union/intersection spacing.
            '@stylistic/space-infix-ops': ['error', { ignoreTypes: true }],
            'local/union-spacing': 'error'
        }
    }
)

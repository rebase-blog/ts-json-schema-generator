import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - type-aliases-primitive-with-id',
    assertValidSchema('type-aliases-primitive-with-id', 'MyString', { jsDoc:'none', schemaId:'testId' }),
)

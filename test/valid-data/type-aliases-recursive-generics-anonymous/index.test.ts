import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - type-aliases-recursive-generics-anonymous',
    assertValidSchema('type-aliases-recursive-generics-anonymous', 'MyAlias'),
)

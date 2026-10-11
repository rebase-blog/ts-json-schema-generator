import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - annotation-union-if-then',
    assertValidSchema('annotation-union-if-then', 'Animal', { jsDoc:'basic' }),
)

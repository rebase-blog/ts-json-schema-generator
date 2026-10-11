import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - type-mapped-index-as-with-conditional',
    assertValidSchema('type-mapped-index-as-with-conditional', 'MyObject'),
)

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - type-conditional-tuple-narrowing',
    assertValidSchema('type-conditional-tuple-narrowing', 'MyObject'),
)

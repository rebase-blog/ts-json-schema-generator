import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - type-aliases-tuple-optional-items',
    assertValidSchema('type-aliases-tuple-optional-items', 'MyTuple'),
)

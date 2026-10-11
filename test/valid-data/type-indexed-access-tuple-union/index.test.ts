import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - type-indexed-access-tuple-union',
    assertValidSchema('type-indexed-access-tuple-union', 'FormLayout'),
)

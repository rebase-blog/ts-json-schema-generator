import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - type-intersection-union-recursive-interface',
    assertValidSchema('type-intersection-union-recursive-interface', 'Intersection'),
)

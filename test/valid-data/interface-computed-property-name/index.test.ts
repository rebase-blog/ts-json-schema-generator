import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - interface-computed-property-name',
    assertValidSchema('interface-computed-property-name', 'MyObject'),
)

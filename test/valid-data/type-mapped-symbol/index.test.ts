import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-symbol', assertValidSchema('type-mapped-symbol', 'MyObject'))

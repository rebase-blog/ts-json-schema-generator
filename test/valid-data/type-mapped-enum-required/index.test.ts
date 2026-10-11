import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-enum-required', assertValidSchema('type-mapped-enum-required', 'MyObject'))

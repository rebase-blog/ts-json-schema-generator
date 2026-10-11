import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-enum-optional', assertValidSchema('type-mapped-enum-optional', 'MyObject'))

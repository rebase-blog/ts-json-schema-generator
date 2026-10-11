import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-optional', assertValidSchema('type-mapped-optional', 'MyObject'))

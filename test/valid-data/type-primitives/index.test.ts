import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-primitives', assertValidSchema('type-primitives', 'MyObject'))

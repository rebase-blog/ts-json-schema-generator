import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-predicate', assertValidSchema('type-predicate', '*'))

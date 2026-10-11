import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-conditional-narrowing', assertValidSchema('type-conditional-narrowing', 'MyObject'))

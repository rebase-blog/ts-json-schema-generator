import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-conditional-intersection', assertValidSchema('type-conditional-intersection', 'MyObject'))

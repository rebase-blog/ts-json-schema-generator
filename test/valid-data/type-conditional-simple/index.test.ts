import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-conditional-simple', assertValidSchema('type-conditional-simple', 'MyObject'))

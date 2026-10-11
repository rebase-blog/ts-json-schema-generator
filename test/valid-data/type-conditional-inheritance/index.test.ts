import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-conditional-inheritance', assertValidSchema('type-conditional-inheritance', 'MyObject'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-conditional-exclude', assertValidSchema('type-conditional-exclude', 'MyObject'))

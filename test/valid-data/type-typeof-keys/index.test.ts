import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-typeof-keys', assertValidSchema('type-typeof-keys', 'MyType'))

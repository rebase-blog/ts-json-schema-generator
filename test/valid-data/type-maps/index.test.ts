import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-maps', assertValidSchema('type-maps', 'MyObject'))

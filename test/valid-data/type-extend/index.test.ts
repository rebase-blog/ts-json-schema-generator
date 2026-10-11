import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-extend', assertValidSchema('type-extend', 'MyObject'))

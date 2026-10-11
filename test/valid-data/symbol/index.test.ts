import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - symbol', assertValidSchema('symbol', 'MyObject'))

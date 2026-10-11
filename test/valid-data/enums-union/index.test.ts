import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - enums-union', assertValidSchema('enums-union', 'MyObject'))

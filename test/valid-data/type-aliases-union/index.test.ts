import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-aliases-union', assertValidSchema('type-aliases-union', 'MyUnion'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-extend-circular', assertValidSchema('type-extend-circular', 'MyType'))

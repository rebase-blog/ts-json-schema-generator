import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - object-function-expression', assertValidSchema('object-function-expression', 'MyType'))

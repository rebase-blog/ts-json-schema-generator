import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - object-literal-expression', assertValidSchema('object-literal-expression', 'MyType'))

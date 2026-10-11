import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - class-new-expression', assertValidSchema('class-new-expression', 'MyType'))

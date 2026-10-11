import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-aliases-primitive', assertValidSchema('type-aliases-primitive', 'MyString'))

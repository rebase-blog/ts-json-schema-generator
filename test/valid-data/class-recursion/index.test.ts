import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - class-recursion', assertValidSchema('class-recursion', 'MyObject'))

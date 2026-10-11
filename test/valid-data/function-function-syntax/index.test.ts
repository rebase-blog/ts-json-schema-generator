import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - function-function-syntax', assertValidSchema('function-function-syntax', 'myFunction'))

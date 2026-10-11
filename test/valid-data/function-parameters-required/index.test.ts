import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - function-parameters-required', assertValidSchema('function-parameters-required', 'myFunction'))

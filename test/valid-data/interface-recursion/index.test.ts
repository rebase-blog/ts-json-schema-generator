import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - interface-recursion', assertValidSchema('interface-recursion', 'MyObject'))

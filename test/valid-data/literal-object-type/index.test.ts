import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - literal-object-type', assertValidSchema('literal-object-type', 'MyType'))

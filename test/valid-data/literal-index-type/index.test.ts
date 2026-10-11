import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - literal-index-type', assertValidSchema('literal-index-type', 'MyType'))

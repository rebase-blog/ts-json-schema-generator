import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - array-rest-only', assertValidSchema('array-rest-only', 'MyType'))

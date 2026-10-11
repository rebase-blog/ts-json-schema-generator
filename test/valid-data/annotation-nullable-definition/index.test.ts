import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - annotation-nullable-definition', assertValidSchema('annotation-nullable-definition', 'MyObject'))

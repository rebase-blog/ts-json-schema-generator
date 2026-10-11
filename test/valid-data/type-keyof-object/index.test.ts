import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-keyof-object', assertValidSchema('type-keyof-object', 'MyType'))

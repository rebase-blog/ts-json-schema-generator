import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-keyof-tuple', assertValidSchema('type-keyof-tuple', 'MyType'))

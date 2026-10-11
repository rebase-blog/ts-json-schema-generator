import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-indexed-access-keyof', assertValidSchema('type-indexed-access-keyof', 'MyType'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-recursive-deep-exclude', assertValidSchema('type-recursive-deep-exclude', 'MyType'))

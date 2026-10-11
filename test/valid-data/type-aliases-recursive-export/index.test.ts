import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-aliases-recursive-export', assertValidSchema('type-aliases-recursive-export', 'MyObject'))

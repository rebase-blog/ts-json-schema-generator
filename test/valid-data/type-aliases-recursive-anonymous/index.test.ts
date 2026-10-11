import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-aliases-recursive-anonymous', assertValidSchema('type-aliases-recursive-anonymous', 'MyAlias'))

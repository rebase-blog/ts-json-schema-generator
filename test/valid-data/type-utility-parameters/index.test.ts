import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-utility-parameters', assertValidSchema('type-utility-parameters', 'MyParameters'))

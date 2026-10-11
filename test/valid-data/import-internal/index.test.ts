import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - import-internal', assertValidSchema('import-internal', 'MyObject', { jsDoc:'basic' }))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - import-anonymous', assertValidSchema('import-anonymous', 'MyObject'))

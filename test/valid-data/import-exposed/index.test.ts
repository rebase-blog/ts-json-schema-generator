import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - import-exposed', assertValidSchema('import-exposed', 'MyObject'))

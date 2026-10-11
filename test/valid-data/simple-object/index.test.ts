import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - simple-object', assertValidSchema('simple-object', 'SimpleObject'))

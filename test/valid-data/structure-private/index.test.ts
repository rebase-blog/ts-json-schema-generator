import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - structure-private', assertValidSchema('structure-private', 'MyObject'))

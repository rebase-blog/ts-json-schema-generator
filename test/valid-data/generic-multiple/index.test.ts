import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - generic-multiple', assertValidSchema('generic-multiple', 'MyObject'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - generic-prefixed-number', assertValidSchema('generic-prefixed-number', 'MyObject'))

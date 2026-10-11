import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - generic-simple', assertValidSchema('generic-simple', 'MyObject'))

test('valid-data - generic-simple', assertValidSchema('generic-simple', '*', { expose:'all' }))

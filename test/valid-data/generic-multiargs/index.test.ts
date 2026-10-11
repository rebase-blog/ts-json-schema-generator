import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - generic-multiargs', assertValidSchema('generic-multiargs', 'MyObject'))

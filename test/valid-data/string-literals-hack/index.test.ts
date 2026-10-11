import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - string-literals-hack', assertValidSchema('string-literals-hack', 'MyObject'))

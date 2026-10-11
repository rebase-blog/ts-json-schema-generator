import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - string-literals', assertValidSchema('string-literals', 'MyObject'))

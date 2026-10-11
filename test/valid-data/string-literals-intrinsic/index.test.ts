import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - string-literals-intrinsic', assertValidSchema('string-literals-intrinsic', 'MyObject'))

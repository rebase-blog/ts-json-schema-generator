import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - any-unknown', assertValidSchema('any-unknown', 'MyObject'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-intersection-union-enum', assertValidSchema('type-intersection-union-enum', 'MyObject'))

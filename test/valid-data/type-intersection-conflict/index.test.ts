import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-intersection-conflict', assertValidSchema('type-intersection-conflict', 'MyObject'))

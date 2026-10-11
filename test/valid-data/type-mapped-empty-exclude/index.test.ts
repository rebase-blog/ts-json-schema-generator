import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-empty-exclude', assertValidSchema('type-mapped-empty-exclude', 'MyObject'))

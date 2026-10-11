import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-regexp', assertValidSchema('type-regexp', 'MyObject'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-number', assertValidSchema('type-mapped-number', '*'))

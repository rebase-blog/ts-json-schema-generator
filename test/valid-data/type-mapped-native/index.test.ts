import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-native', assertValidSchema('type-mapped-native', 'MyObject'))

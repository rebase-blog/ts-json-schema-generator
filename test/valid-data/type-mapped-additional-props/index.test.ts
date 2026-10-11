import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-mapped-additional-props', assertValidSchema('type-mapped-additional-props', 'MyObject'))

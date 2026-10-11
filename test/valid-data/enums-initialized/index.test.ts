import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - enums-initialized', assertValidSchema('enums-initialized', 'Enum'))

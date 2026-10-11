import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-indexed-circular-access', assertValidSchema('type-indexed-circular-access', '*'))

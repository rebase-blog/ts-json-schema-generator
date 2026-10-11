import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - ignore-export', assertValidSchema('ignore-export', '*'))

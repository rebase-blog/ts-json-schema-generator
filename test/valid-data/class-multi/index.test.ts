import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - class-multi', assertValidSchema('class-multi', 'MyObject'))

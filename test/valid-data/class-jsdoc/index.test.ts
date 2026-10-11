import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - class-jsdoc', assertValidSchema('class-jsdoc', 'MyObject'))

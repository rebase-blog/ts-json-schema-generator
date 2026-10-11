import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - class-jsdoc-default', assertValidSchema('class-jsdoc-default', 'MyObject'))

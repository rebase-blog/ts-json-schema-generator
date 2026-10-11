import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - structure-extra-props-symbol', assertValidSchema('structure-extra-props-symbol', 'MyObject'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - array-min-max-items-optional', assertValidSchema('array-min-max-items-optional', 'MyType'))

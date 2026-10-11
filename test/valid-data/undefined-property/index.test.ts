import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - undefined-property', assertValidSchema('undefined-property', 'MyType'))

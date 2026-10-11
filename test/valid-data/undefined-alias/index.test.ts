import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - undefined-alias', assertValidSchema('undefined-alias', 'MyType'))

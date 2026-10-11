import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - promise-generics', assertValidSchema('promise-generics', '*'))

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-aliases-tuple-only-rest', assertValidSchema('type-aliases-tuple-only-rest', 'MyTuple'))

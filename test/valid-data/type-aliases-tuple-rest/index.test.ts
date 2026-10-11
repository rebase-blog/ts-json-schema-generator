import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-aliases-tuple-rest', assertValidSchema('type-aliases-tuple-rest', 'MyTuple'))

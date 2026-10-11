import { test } from 'node:test'
import { assertValidSchema } from '../../utils.js'

const testDir = 'type-aliases-tuple-rest-array-ref'

test(`valid-data - ${testDir}`, assertValidSchema(testDir, 'TupleWithRestRef'))

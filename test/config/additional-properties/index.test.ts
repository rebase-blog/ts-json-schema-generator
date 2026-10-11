import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - additional-properties',
    assertConfigSchema('additional-properties', {
        type:'MyObject',
        additionalProperties:true,
    }),
)

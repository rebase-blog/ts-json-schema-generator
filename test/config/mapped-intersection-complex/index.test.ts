import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - mapped-intersection-complex',
    assertConfigSchema('mapped-intersection-complex', {
        type:'MyObject',
        additionalProperties:true,
    }),
)

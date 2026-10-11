import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - mapped-index-any',
    assertConfigSchema('mapped-index-any', {
        type:'*',
        additionalProperties:true,
    }),
)

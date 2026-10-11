import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - jsdoc-complex-none',
    assertConfigSchema('jsdoc-complex-none', {
        type:'MyObject',
        expose:'export',
        topRef:true,
        jsDoc:'none',
    }),
)

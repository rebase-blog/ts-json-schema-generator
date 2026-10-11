import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - jsdoc-inheritance',
    assertConfigSchema('jsdoc-inheritance', {
        type:'MyObject',
        expose:'export',
        topRef:true,
        jsDoc:'extended',
    }),
)

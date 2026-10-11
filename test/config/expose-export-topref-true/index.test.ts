import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - expose-export-topref-true',
    assertConfigSchema('expose-export-topref-true', {
        type:'MyObject',
        expose:'export',
        topRef:true,
        jsDoc:'none',
    }),
)

import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - expose-all-topref-false',
    assertConfigSchema('expose-all-topref-false', {
        type:'MyObject',
        expose:'all',
        topRef:false,
        jsDoc:'none',
    }),
)

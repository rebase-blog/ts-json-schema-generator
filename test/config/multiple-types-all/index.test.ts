import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - multiple-types-all',
    assertConfigSchema('multiple-types-all', {
        type:['MyObject1', 'MyObject2', 'Object1Prop', 'Object2Prop'],
    }),
)

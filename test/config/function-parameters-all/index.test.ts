import { it } from 'node:test'
import { assertConfigSchema } from '../../utils.js'

it(
    'config - function-parameters-all',
    assertConfigSchema('function-parameters-all', {
        type:'*',
    }),
)

import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - function-parameters-variable-assignment',
    assertValidSchema('function-parameters-variable-assignment', 'myFunction'),
)

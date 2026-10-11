import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - generic-void', assertValidSchema('generic-void', 'MyObject'))

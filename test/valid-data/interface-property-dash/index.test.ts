import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - interface-property-dash', assertValidSchema('interface-property-dash', 'MyObject'))

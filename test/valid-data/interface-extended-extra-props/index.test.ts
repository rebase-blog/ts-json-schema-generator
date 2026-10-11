import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - interface-extended-extra-props', assertValidSchema('interface-extended-extra-props', 'MyObject'))

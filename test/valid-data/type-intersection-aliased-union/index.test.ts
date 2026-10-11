import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - type-intersection-aliased-union', assertValidSchema('type-intersection-aliased-union', 'MyObject'))

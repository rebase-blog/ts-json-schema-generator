import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test('valid-data - export-star', assertValidSchema('export-star', '*', undefined, { mainTsOnly:true }))

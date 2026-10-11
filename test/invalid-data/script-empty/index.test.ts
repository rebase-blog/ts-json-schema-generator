import { it } from 'node:test'
import { assertInvalidSchema } from '../../utils.js'

it('invalid-data - script-empty', assertInvalidSchema('script-empty', 'MyType', 'No root type "MyType" found'))

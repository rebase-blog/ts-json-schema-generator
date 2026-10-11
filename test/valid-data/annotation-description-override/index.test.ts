import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - annotation-description-override',
    assertValidSchema('annotation-description-override', 'MyObject', { extraTags:['markdownDescription'] }),
)

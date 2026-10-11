import { assertValidSchema } from '../../utils.js'
import { test } from 'node:test'

test(
    'valid-data - annotation-custom',
    assertValidSchema('annotation-custom', 'MyObject', {
        jsDoc:'basic',
        extraTags:[
            'customBooleanProperty',
            'customNumberProperty',
            'customStringProperty',
            'customComplexProperty',
            'customMultilineProperty',
            'customUnquotedProperty',
        ],
    }),
)

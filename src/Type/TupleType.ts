import { derefType } from '../Utils/derefType.js'
import type { ArrayType } from './ArrayType.js'
import { BaseType } from './BaseType.js'
import type { InferType } from './InferType.js'
import { RestType } from './RestType.js'

function normalize (types:Readonly<Array<BaseType>>):Array<BaseType> {
    let normalized:Array<BaseType> = []

    for (const type of types) {
        if (type instanceof RestType) {
            const innerType = derefType(type.getType()) as ArrayType|InferType|TupleType
            normalized = [
                ...normalized,
                ...(innerType instanceof TupleType ? normalize(innerType.getTypes()) : [type]),
            ]
        } else {
            normalized.push(type)
        }
    }
    return normalized
}

export class TupleType extends BaseType {
    private types:Readonly<Array<BaseType>>

    public constructor (types:Readonly<Array<BaseType>>) {
        super()

        this.types = normalize(types)
    }

    public getId ():string {
        return `[${this.types.map((item) => item?.getId() ?? 'never').join(',')}]`
    }

    public getTypes ():Readonly<Array<BaseType>> {
        return this.types
    }
}

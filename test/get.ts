import * as assert from 'power-assert'
import { get } from '../src/get'

describe('typed-immutable-methods#get', () => {
  it('should get a value', () => {
    const a = {
      b: {
        c: 'string value',
      }
    }

    const b = get(a, ['b'])

    assert(a.b !== b)
    assert.deepStrictEqual(a.b, b)
  })
})

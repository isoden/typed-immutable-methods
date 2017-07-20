import * as assert from 'power-assert'
import { set } from '../src/set'

describe('immutablite#set', () => {
  it('should set new value', () => {
    const a = {
      b: 'original value'
    }

    const updated = set(a, ['b'], 'new value')

    assert(updated !== a)
    assert(a.b === 'original value')
    assert.deepStrictEqual(updated, {
      b: 'new value',
    })
  })
})

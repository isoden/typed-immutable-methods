immutablite
===

Immutable getter/setter methods with Types

[![npm](https://img.shields.io/npm/v/immutablite.svg?style=flat-square)](https://www.npmjs.com/package/immutablite)

## Installation

```console
$ npm install immutablite --save 
```

## Usage

```ts
import { get } from 'immutablite'

const entity = {
  a: {
    b: {
      c: 'string value',
      d: 23,
    }
  }
}

const c = get(entity, ['a', 'b', 'c']) // c is string type by type inference
const d = get(entity, ['a', 'b', 'd']) // d is number type by type inference
const b = get(entity, ['a', 'b'])      // b is { c: string; d: number } by type inference

expect(b).not.toEqual(entity.a.b)      // different references

get(entity, ['d'])                     // Compile error
```

```ts
import { set } from 'immutablite'

const updated = set(entity, ['a', 'b', 'd'], 24)

expect(updated).toEqual({
  a: {
    b: {
      c: 'string value',
      d: 24,
    }
  }
})
expect(updated).not.toEqual(entity)          // different references

set(entity, ['a', 'b', 'd'], 'not a number') // Compile error
```

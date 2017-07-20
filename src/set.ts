'use strict'

import cloneDeep = require('lodash.clonedeep')
import isNil     = require('lodash.isnil')

export function set<T, U extends keyof T>(object: T, keys: [U], value: T[U]): Readonly<T>
export function set<T, U extends keyof T, V extends keyof T[U]>(object: T, keys: [U, V], value: T[U][V]): Readonly<T>
export function set<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V]>(object: T, keys: [U, V, W], value: T[U][V][W]): Readonly<T>
export function set<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W]>(object: T, keys: [U, V, W, X], value: T[U][V][W][X]): Readonly<T>
export function set<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W], Y extends keyof T[U][V][W][X]>(object: T, keys: [U, V, W, X, Y], value: T[U][V][W][X][Y]): Readonly<T>
export function set<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W], Y extends keyof T[U][V][W][X], Z extends keyof T[U][V][W][X][Y]>(object: T, keys: [U, V, W, X, Y, Z], value: T[U][V][W][X][Y][Z]): Readonly<T>
export function set(object: object, keys: string[], value: any): object {
  const cloned = cloneDeep(object)
  return setter(cloned, cloned, keys, value)
}

const setter = (baseObject: object, object: { [key: string]: any }, keys: string[], value: any): any => {
  const [head, ...tail] = keys
  const next            = object[head]

  if (isNil(next)) {
    return Object.freeze(baseObject)
  }

  if (tail.length === 0) {
    object[head] = value
    return Object.freeze(baseObject)
  }

  return setter(baseObject, next, tail, value)
}

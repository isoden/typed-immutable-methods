'use strict'

import cloneDeep = require('lodash.clonedeep')
import isNil     = require('lodash.isnil')

export function get<T, U extends keyof T>(object: T, keys: [U]): Readonly<T[U]>
export function get<T, U extends keyof T, V extends keyof T[U]>(object: T, keys: [U, V]): Readonly<T[U][V]>
export function get<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V]>(object: T, keys: [U, V, W]): Readonly<T[U][V][W]>
export function get<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W]>(object: T, keys: [U, V, W, X]): Readonly<T[U][V][W][X]>
export function get<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W], Y extends keyof T[U][V][W][X]>(object: T, keys: [U, V, W, X, Y]): Readonly<T[U][V][W][X][Y]>
export function get<T, U extends keyof T, V extends keyof T[U], W extends keyof T[U][V], X extends keyof T[U][V][W], Y extends keyof T[U][V][W][X], Z extends keyof T[U][V][W][X][Y]>(object: T, keys: [U, V, W, X, Y, Z]): Readonly<T[U][V][W][X][Y][Z]>
export function get(object: object, keys: string[]): any {
  return getter(cloneDeep(object), keys)
}

const getter = (object: { [key: string]: any }, keys: string[]): any => {
  const [head, ...tail] = keys
  const next            = object[head]

  if (isNil(next)) {
    return
  }

  if (tail.length === 0) {
    return Object.freeze(next)
  }

  return getter(next, tail)
}

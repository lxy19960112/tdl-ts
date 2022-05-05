// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never

// js
function myFirst (arr) {
  if (arr.length === 0) return "never"
  return arr[0]
}

/*
  1. 获取数组的长度，如果数组的长度大于0，返回arr[0]
  never
*/

type a = [1,2,3]


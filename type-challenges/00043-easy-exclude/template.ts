type MyExclude<T, U> = T extends U ? never : T

type t1 = ['a', 'b', 'c']

type t21 = t1[number]

type t31 = Exclude<t21, 'a'>
type t32 = MyExclude<t21, 'a'>

type tt = t21 extends "a" | "b" | "c" ? 'true' : 'false'



type p1 = [1,2,3]
type p2 = [1]

type p3 = p2 extends [1] ? 'true' : 'false'

// js

const func = (arr1, arr2) => {
  const arr3 = []
  arr1.forEach(item1 => {
    if (!arr2.includes(item1)) {
      arr3.push(item1)
    }
  });
  return arr3
}

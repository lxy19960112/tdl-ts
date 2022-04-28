type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type test1 = TupleToObject<typeof tuple>


// js
// const tuple = ['tesla', 'model 3', 'model X', 'model Y']
// function tupleToObject(array) {
//   const object = {}
//   array.forEach(item => {
//     object[item] = item
//   })
//   return object
// }

/*
1. 给定一个数组，遍历数组赋值给每一个key 赋值给对象
   遍历数组
*/

// let str = 'aaa'
// type a = typeof str
// let str1: a = 1

// const strConst = 'oiiii'
// type b = typeof strConst
// let str2: b = 'q'

// const arr1 = [1,2,1]
// type arrT = typeof arr1
// arr1[0] = 2

// const arr2 = [1,2,3] as const
// type arr2T = typeof arr2


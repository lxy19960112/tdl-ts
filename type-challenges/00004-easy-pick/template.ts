
// js
// function MyPick(todo, keys) {
//   const object = {}
//   keys.forEach(key => {
//     if (key in todo) {
//       object[key] = todo[key]
//     }
//   })
//   return object
// }

// const todo = {
//   a:1,
//   b:2
// }
// const keys = ['a']
// const pickObject = MyPick(todo, keys)
// console.log('pickObject :>> ', pickObject);

/*
  1. 返回一个对象
  2. 遍历keys
  3. 取值 todo[key]
*/
/*
  考察知识点
  1. 泛型 https://www.tslang.cn/docs/handbook/generics.html
  2. extends继承
  3. keyof 高级类型-索引类型 https://www.tslang.cn/docs/handbook/advanced-types.html
      interface TT {
        key1: number,
        key2: string
      }

      let a: keyof TT
      a = 'key1'

      let b: 'key1' | 'key2'
      b = 'key1'
*/
type MyPick<T , K extends keyof T> = {
  [P in K]: T[P]
}





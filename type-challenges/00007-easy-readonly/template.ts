type MyReadonly<T> = {
  readonly [P in keyof T]:  T[P]
}

// js
function MyReadonly(todo: object) {
  const result = {}
  for (const key in todo) {
    if (Object.prototype.hasOwnProperty.call(todo, key)) {
      result[`readonly ${key}`] = todo[key]
    }
  }
  return result
}

// const obj = MyReadonly({a:1, person: {age: 2}})

/*
  1. 返回一个对象
  2. 遍历 obj（js 对象 ts 接口） forEach
     mapped-type
     https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
  3. 加上 readonly 关键字
  4. 通过 key 来获取 obj（接口）里面的值
*/





type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// js
// function funcc (f) {
//   return f()
// }

// one
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P]
// } & {
//   [P in Exclude<keyof T, K>]: T[P]
// }

// two
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & Omit<T, K>


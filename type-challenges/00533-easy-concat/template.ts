type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U]

//js
function jsConcat (T, U) {
  return [...T, ...U]
}

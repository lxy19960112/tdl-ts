type Length<T extends readonly any[]> =  T['length']

// js
function getLength(arr) {
  if(!Array.isArray(arr)) {
    return
  }
  return arr.length
}

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
type aa = Length<typeof tesla>

type t2 = [number, string, 1]
type t22 = t2['length']
const t222: t2 = [1, '',1]

type t3 = Array<string>
type t33 = t3['length']

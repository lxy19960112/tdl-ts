/**
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，
 * 返回的类型要么是 true 要么是 false。
 */

 import { Equal } from "@type-challenges/utils";

 type Includes<T extends readonly any[], U> = T extends [
   infer First,
   ...infer Rest
 ]
   ? Equal<U, First> extends true
     ? true
     : Includes<Rest, U>
   : false;
 
 // Infer 关键字的理解和使用
 
 // @type-challenges/utils 类型工具的 Equal 类型工具
 
 /**
  * 这道题没有做做出来，关键是没有想过 infer 可以这么写，也没有想到 使用了 Equal，所以对数组类型的遍历 没有思路
  * 1. 和 00189-easy-awaited 的第二种解发思路一样，使用 Infer 和 递归
  * 2. 首先传入的 泛型 T 在经过类型约束： T extends readonly any[]  后，一定不会走到 false的
  * 3. T extends [infer First,...infer Rest] 在这里假设了 T泛型，中的第一个元素的类型是 First 可以看做数学里的（未知数X），其他的类型是 Rest 可以看做数学里的（未知数Y）
  * 4. 然后判断 第一个元素类型First 和 第二个泛型参数的类型是否一致，这里就使用到了Equal： Equal<U, First> extends true。 如果是则直接返回true，就没必要进行后面的递归操作了
  * 5. 如果第一个元素类型参数不一致，就进行递归操作。 其实就是在拿泛型U和泛型T的第一个元素的类型做比较。
  */
 
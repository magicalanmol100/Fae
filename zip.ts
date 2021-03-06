import zipWith from "./zipWith.ts"
import curryN from "./utils/curry_n.ts"
import { Curry2 } from "./utils/types.ts"

function zip<T1 = any, T2 = any>(list1: T1[], list2: T2[]) {
  return zipWith((a, b) => [a, b], list1, list2)
}

/** Creates a new list out of two passed lists `list1`, `list2` by pairing up
 * equally-positioned pair in both the lists.
 * The returned is truncated to the length of the shorter of the two input lists.
 * @function
 * 
 *      Fae.zip([100, 200, 300], [1, 2, 3]) // [[1, 100], [2, 200], [3, 300]]
 */
export default curryN(2, zip) as Curry2<any[], any[], any[]>

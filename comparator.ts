import { Comparator } from "./utils/types.ts"

type F<T> = (a: T, b: T) => boolean

/** Returns a comparator out of `predicate` which returns `true` when
 * its first argument is less than the second, `false` otherwise */
export default function comparator<T = any>(predicate: F<T>): Comparator<T> {
  return function(a: T, b: T) {
    return(
      predicate(a, b)
        ? -1
        : predicate(b, a)
          ? 1
          : 0
    )
  }
}

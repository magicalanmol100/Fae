import reduce from './reduce.ts'

import { Curry2, FunctorWithArLk } from './utils/types.ts'
import curryN from './utils/curry_n.ts'
import { isArray, isIterable, isIterator, isArrayLike, isNotUndefinedOrNull } from './utils/is.ts'
import { throwFunctorError } from './utils/throw.ts'

function _arrayJoin<T>(separator: string, list: Array<T>) {
  return list.join(separator)
}
function join<T extends Object>(separator: string | number, functor: FunctorWithArLk<T>) {
  const sep = separator.toString()
  if(isArray(functor)) return _arrayJoin(sep, functor.filter(isNotUndefinedOrNull))
  if(isIterable(functor) || isIterator(functor) || isArrayLike(functor)) {
    return reduce(
      (acc: string, value: T) => {
        return(
          isNotUndefinedOrNull(value)
            ? acc + (acc ? sep : '') + value.toString()
            : acc
        )
      },
      '',
      functor
    )
  }
  throwFunctorError()
}

/** Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 * The functor may be array-like/iterable/iterator.
 * @function */
export default curryN(2, join) as Curry2<string | number, FunctorWithArLk, string>

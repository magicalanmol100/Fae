import { FunctorWithArLk, Curry2 } from "./utils/types.ts"
import { isArrayLike, isIterable, isIterator, isString } from "./utils/is.ts"
import { getIterable } from "./utils/get.ts"
import { throwFunctorError } from "./utils/throw.ts"
import curryN from "./utils/curry_n.ts"

function nth<T>(index: number, functor: FunctorWithArLk<T> | string) {
  let f: ArrayLike<T> | string = ''
  if(isArrayLike(functor)) f = functor
  else if(isIterable(functor)) f = [...functor]
  else if(isIterator(functor)) f = [...getIterable(functor)]
  else if(isString(functor)) f = functor
  else throwFunctorError()

  index = index < 0 ? index + f.length : index
  return f[index]
}

/** Returns `index`th element of `functor`.
 * Returns element counting from right end if `index` is -ve.
 * Works in array-like/string/iterable/iterator
 * @function */
export default curryN(2, nth) as Curry2<number, FunctorWithArLk | string, any>

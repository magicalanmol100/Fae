/*
** Takes in Array and Element as its 2 parameters
** Return the 1st index If element is matched or -1 is unmatched.
*/
import curryN from "./utils/curry_n.ts"
import { Curry2 } from "./utils/types.ts"

function findIndex(arr: Array<any>, element: any){
    for(let i = 0; i <= arr.length; i++){
        if(element === arr[i]) return i
    }
    return -1
}

export default <Curry2<Array<any>, any, any>>curryN(2, findIndex)
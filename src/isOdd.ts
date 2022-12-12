import { filter } from "../lib";

/*
 * @params {number} n
 * @return {boolean}
 */
function isOdd(n: number) {
  //@todo your code goes here
  return n % 2 !== 0;
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should be [1, 3, 5, 7, 9]
export default filter(isOdd);

import { filter } from "../lib";

/*
 * @param {number} n
 * @return {boolean}
 */
function isEven(n: number) {
  return n % 2 === 0;
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should be [0, 2, 4, 6, 8, 10]
export default filter(isEven);

import { filter } from "../lib";

/*
 * @param {number} n
 * @return {boolean}
 */
function greaterThanFour(n: number) {
  return n > 4;
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should be [5, 6, 7, 8, 9, 10]
export default filter(greaterThanFour);

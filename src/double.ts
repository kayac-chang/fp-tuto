import { map } from "../lib";

/**
 * @param {number} n
 * @return number
 */
function double(n: number) {
  return n * 2;
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be 10
export default map(double);

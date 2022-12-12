import { reduce } from "../lib/index";

/*
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function max(a: number, b: number) {
  return Math.max(a, b);
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be 10
export default reduce(max, -Infinity);

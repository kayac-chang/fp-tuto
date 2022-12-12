import { reduce } from "../lib/index";

/*
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sum(a: number, b: number) {
  //@todo your code goes here
  return a + b;
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be 55
export default reduce(sum, 0);

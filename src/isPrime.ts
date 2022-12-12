import { filter } from "../lib";

/*
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n: number) {
  if (n === 0 || n === 1) return false;

  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should be [2, 3, 5, 7]
export default filter(isPrime);

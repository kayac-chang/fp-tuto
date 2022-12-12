import { map } from "../lib/index";

/*
 * @param {number}
 * @return {string | number}
 */
function fizzBuzz(num: number) {
  if (num === 0 || num % 15 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

// passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [fizzbuzz,1,2,fizz,4,buzz,fizz,7,8,fizz,buzz]
export default map(fizzBuzz);

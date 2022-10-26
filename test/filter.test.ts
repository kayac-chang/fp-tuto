import filterEven from "../src/isEven";
import filterOdd from "../src/isOdd";
import filterGreaterThanFour from "../src/greaterThanFour";
import filterPrime from "../src/isPrime";

describe("filter", () => {
  describe("isEven", () => {
    test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [0, 2, 4, 6, 8, 10]", () => {
      const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [0, 2, 4, 6, 8, 10];
      expect(filterEven(testcase)).toStrictEqual(expected);
    });
  });

  describe("isOdd", () => {
    test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [1, 3, 5, 7, 9]", () => {
      const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [1, 3, 5, 7, 9];
      expect(filterOdd(testcase)).toStrictEqual(expected);
    });
  });

  describe("greaterThanFour", () => {
    test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [5, 6, 7, 8, 9, 10]", () => {
      const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [5, 6, 7, 8, 9, 10];
      expect(filterGreaterThanFour(testcase)).toStrictEqual(expected);
    });
  });

  describe("isPrime", () => {
    test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [2, 3, 5, 7]", () => {
      const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [2, 3, 5, 7];
      expect(filterPrime(testcase)).toStrictEqual(expected);
    });
  });
});

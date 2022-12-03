import filterPrime from "../src/isPrime";

describe("isPrime", () => {
  test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [2, 3, 5, 7]", () => {
    const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [2, 3, 5, 7];
    expect(filterPrime(testcase)).toStrictEqual(expected);
  });
});

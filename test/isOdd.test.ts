import filterOdd from "../src/isOdd";

describe("isOdd", () => {
  test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [1, 3, 5, 7, 9]", () => {
    const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [1, 3, 5, 7, 9];
    expect(filterOdd(testcase)).toStrictEqual(expected);
  });
});

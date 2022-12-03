import filterGreaterThanFour from "../src/greaterThanFour";

describe("greaterThanFour", () => {
  test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [5, 6, 7, 8, 9, 10]", () => {
    const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [5, 6, 7, 8, 9, 10];
    expect(filterGreaterThanFour(testcase)).toStrictEqual(expected);
  });
});

import max from "../src/max";

describe("max", () => {
  test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be 10", () => {
    const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = 10;
    expect(max(testcase)).toStrictEqual(expected);
  });
});

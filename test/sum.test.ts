import sum from "../src/sum";

describe("sum", () => {
  test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be 55", () => {
    const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = 55;
    expect(sum(testcase)).toStrictEqual(expected);
  });
});

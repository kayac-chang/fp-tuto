import mapHalf from "../src/half";

describe("half", () => {
  test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]", () => {
    const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    expect(mapHalf(testcase)).toStrictEqual(expected);
  });
});

import mapDouble from "../src/double";
import mapHalf from "../src/half";
import fizzBuzz from "../src/fizzBuzz";

describe("map", () => {
  describe("double", () => {
    test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]", () => {
      const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      expect(mapDouble(testcase)).toStrictEqual(expected);
    });
  });

  describe("half", () => {
    test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]", () => {
      const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
      expect(mapHalf(testcase)).toStrictEqual(expected);
    });
  });

  describe("fizzbuzz", () => {
    test("passing [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], should be [fizzbuzz,1,2,fizz,4,buzz,fizz,7,8,fizz,buzz]", () => {
      const testcase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expected = [
        "fizzbuzz",
        1,
        2,
        "fizz",
        4,
        "buzz",
        "fizz",
        7,
        8,
        "fizz",
        "buzz",
      ];
      expect(fizzBuzz(testcase)).toStrictEqual(expected);
    });
  });
});

import fizzBuzz from "../src/fizzBuzz";

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

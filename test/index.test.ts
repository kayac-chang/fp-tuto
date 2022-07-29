import generatePassword from "../src/index";

describe("input is not an integer, expected throw 'Not an Integer'", () => {
  test("passing null", () => {
    //@ts-ignore
    expect(() => generatePassword(null)).toThrow("Not an Integer");
  });

  test("passing undefined", () => {
    //@ts-ignore
    expect(() => generatePassword(undefined)).toThrow("Not an Integer");
  });

  test("passing {}", () => {
    //@ts-ignore
    expect(() => generatePassword({})).toThrow("Not an Integer");
  });

  test("passing []", () => {
    //@ts-ignore
    expect(() => generatePassword([])).toThrow("Not an Integer");
  });

  test("passing ''", () => {
    //@ts-ignore
    expect(() => generatePassword("")).toThrow("Not an Integer");
  });

  test("passing ' '", () => {
    //@ts-ignore
    expect(() => generatePassword(" ")).toThrow("Not an Integer");
  });

  test("passing abc", () => {
    //@ts-ignore
    expect(() => generatePassword("abc")).toThrow("Not an Integer");
  });

  test("passing '16.1'", () => {
    //@ts-ignore
    expect(() => generatePassword("16.1")).toThrow("Not an Integer");
  });

  test("passing 16.1", () => {
    //@ts-ignore
    expect(() => generatePassword(16.1)).toThrow("Not an Integer");
  });
});

describe("Input is less than 3, Expected Output: 'Minimum length allowed: 3'", () => {
  test("passing 2", () => {
    expect(() => generatePassword(2)).toThrow("Minimum length allowed: 3");
  });
});

describe(`Output is a string with desired length`, () => {
  test("passing desired length 16, expected output is string", () => {
    expect(typeof generatePassword(16)).toBe("string");
  });

  test("passing desired length 16, expected output length is 16", () => {
    expect(generatePassword(16)).toHaveLength(16);
  });
});

describe("Password must comply with at least three of the following four character categories:" /*
    - Contain at least one uppercase character (A-Z).
    - Contain at least one lowercase character (a-z).
    - Contain at least one digit (0-9).
    - Contain at least one symbol (~!@#$%^&*_-+=`|(){}[]:;"'<>,.?/).
*/, () => {
  test("Contain at least one uppercase character (A-Z)", () => {
    const expected = [
      /[A-Z]/,
      /[a-z]/,
      /[0-9]/,
      /~!@#$%^&*_-+=`|(){}[]:;"'<>,.?/,
    ];

    const result = generatePassword(16);

    expect(
      expected
        //
        .map((rule) => rule.test(result))
        .filter(Boolean).length
    ).toBeGreaterThanOrEqual(3);
  });
});

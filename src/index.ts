import { randomInt } from "crypto";

function random(min: number, max: number): number {
  return randomInt(min, max);
}

const random_pick = <T>(list: T[]) => {
  return list[random(0, list.length - 1)];
};

const charset = [
  // uppercase character (A-Z).
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  // lowercase character (a-z).
  "abcdefghijklmnopqrstuvwxyz",
  // digit (0-9).
  "0123456789",
  // symbol (~!@#$%^&*_-+=`|(){}[]:;"'<>,.?/).
  "~!@#$%^&*_-+=`|(){}[]:;\"'<>,.?/",
]
  .join("")
  .split("");

const test = (word: string) => (regex: RegExp) => regex.test(word);
const match =
  (patterns: RegExp[], at_least = patterns.length) =>
  (word: string) =>
    patterns.map(test(word)).filter(Boolean).length >= at_least;

const check = match(
  [
    // - Contain at least one uppercase character (A-Z).
    /[A-Z]/,
    // - Contain at least one lowercase character (a-z).
    /[a-z]/,
    // - Contain at least one digit (0-9).
    /[0-9]/,
    // - Contain at least one symbol (~!@#$%^&*_-+=`|(){}[]:;"'<>,.?/).
    /~!@#$%^&*_-+=`|(){}[]:;"'<>,.?\//,
  ],
  // comply at least 3
  3
);

function generatePassword(charsQuantity: number): string {
  if (!Number.isInteger(charsQuantity)) throw new Error("Not an Integer");

  if (charsQuantity < 3) throw new Error("Minimum length allowed: 3");

  while (true) {
    let result = "";

    while (result.length < charsQuantity) {
      result += random_pick(charset);
    }

    if (check(result)) return result;
  }
}

export default generatePassword;

import {
  getDigit,
  digitCount,
  mostDigits,
  radixSort,
} from "../radixSort/radixSort";

describe("getDigit", () => {
  it("returns a specificied digit of a number", () => {
    expect(getDigit(123456789, 3)).toBe(7);
    expect(getDigit(123456789, 10)).toBe(0);
    expect(getDigit(-123456789, 3)).toBe(7);
  });
});

describe("digitCount", () => {
  it("returns the number of digits in a number", () => {
    expect(digitCount(123456789)).toBe(9);
    expect(digitCount(-12345)).toBe(5);
  });
});

describe("mostDigits", () => {
  it("returns the largest number of digits from an array of numbers", () => {
    expect(mostDigits([1, 565, 65474, 123, 45, 356, 54833, 123456])).toBe(6);
    expect(mostDigits([])).toBe(0);
    expect(mostDigits([1, -565, -65474, -123, -45, -356, 54833, 123456])).toBe(
      6
    );
  });
});

describe("radixSort", () => {
  it("returns a sorted list of numbers", () => {
    expect(radixSort([1, 3, 4, 5, 66, 4, 888, 6, 6, 9999, 222, 44])).toEqual([
      1, 3, 4, 4, 5, 6, 6, 44, 66, 222, 888, 9999,
    ]);
    // expect(radixSort([1, 0, 56, 4565, 18, 45])).toEqual([
    //   45, 1, 0, 56, 4565, 18,
    // ]);
  });
});

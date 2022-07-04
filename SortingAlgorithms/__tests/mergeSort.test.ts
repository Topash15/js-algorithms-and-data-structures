import { merge, mergeSort } from "../mergeSort/mergeSort";

describe("merge function", () => {
  it("should merge two arrays and return combined array", () => {
    const mergeResult = merge([5, 1, 6, 2], [7, 9, 3, -5]).toString();
    const sortedArray = [5, 1, 6, 2, 7, 9, 3, -5].toString();
    expect(mergeResult.match(sortedArray));
  });
});

describe("mergeSort function", () => {
  it("should return a sorted array of numbers", () => {
    const mergeSortResult = mergeSort([5, 1, 6, 2, 7, 9, 3, -5]);
    const sortedArray = [-5, 1, 2, 3, 5, 6, 7, 9];
    expect(mergeSortResult.toString().match(sortedArray.toString()));
  });
});

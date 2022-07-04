import { pivot, quickSort } from "../quickSort/quickSort";

describe("pivot function", () => {
  it("should return pivot index of first item in id", () => {
    expect(pivot([5, 1, 6, 2, 7, 9, 3])).toBe(3);
  });
});

describe("quickSort function", () => {
    it('should return a sorted array of numbers', ()=>{
        const quickSortResult = quickSort([5, 1, 6, 2, 7, 9, 3, -5]);
        const sortedArray = [-5,1,2,3,5,6,7,9];
        expect(quickSortResult.toString()).toMatch(sortedArray.toString())
    })
})
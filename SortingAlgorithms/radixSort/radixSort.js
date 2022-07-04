"use strict";
/**
 * Works on list of numbers
 *
 * Never makes comparisons between two elements
 *
 * Exploits the fact that information
 * about the size of a number is encorded in the number of digits
 *
 * More digits means a bigger number
 *
 *
 * Looks at each digit of each number in a list and stores them in an
 * appropriate 'bucket'. Creates new list based on order of digits in bucket.
 * Repeats process based on the largest number of digits.
 * Never compares two numbers directly
 */
exports.__esModule = true;
exports.radixSort = exports.mostDigits = exports.digitCount = exports.getDigit = void 0;
// HELPER METHODS
/**Returns digit of a number given a place*/
function getDigit(num, place) {
    var numAsString = Math.abs(num).toString();
    var digit = parseInt(numAsString[numAsString.length - place]);
    if (digit === NaN || !digit) {
        return 0;
    }
    return digit;
}
exports.getDigit = getDigit;
/** alternative method to get digit */
//  export function getDigit(num: number, place: number){
//  return Math.floor(math.abs(num)/Math.pow(10,place))%10;
//  }
// getDigit(12345, 2)
/** Returns number of digits in a number*/
function digitCount(num) {
    var numAsString = Math.abs(num).toString();
    var count = numAsString.length;
    return count;
}
exports.digitCount = digitCount;
/** alternative method to get digit count */
// export function digitCount(num: number): number{
//     if(num === 0){
//         return 1;
//     }
//     return Math.floor(Math.log10(Math.abs(num)))+1;
// }
/** Returns number with the most digits from an array */
function mostDigits(arr) {
    var maxDigits = 0;
    for (var i = 0; i < arr.length; i++) {
        // compares current max to current num. sets maxDigits
        // to larger number
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}
exports.mostDigits = mostDigits;
/** Sorts array of numbers and returns a sorted array
 * ONLY WORKS WITH POSITIVE NUMBERS at this time
*/
function radixSort(arr) {
    var mostDigitCount = mostDigits(arr);
    //loops through most digits
    for (var i = 1; i <= mostDigitCount; i++) {
        // creates array of 10 empty buckets
        var buckets = Array.from({ length: 10 }, function () { return []; });
        // loops through array to organize each number into buckets
        for (var j = 0; j < arr.length; j++) {
            var digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [];
        // combines buckets back into array
        for (var b = 0; b < buckets.length; b++) {
            arr = arr.concat(buckets[b]);
        }
    }
    return arr;
}
exports.radixSort = radixSort;
radixSort([1, 3, 4, 5, 66, 4, 888, 6, 6, 9999, 222, 44]);

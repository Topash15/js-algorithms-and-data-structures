"use strict";
/**
 * Exploits the fact that arrays of 0 or 1 elements are always sorted
 *
 * Works by selecting one element called the pivot
 * and finding the index where the pivot should end up
 * in the sorted array.
 *
 * Once the pivot is positioned appropriately,
 * quick sort can be applied to either side of the pivot.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = exports.pivot = void 0;
/**
 * Inputs array, starting index, and ending index.
 * Indicies default to 0 and array length minus one if not provided.
 */
function pivot(arr, index1 = 0, index2 = arr.length - 1) {
    // helper function to swap values in array
    /**
     * Accepts array, index1, and index2 as arguments.
     * Swaps values of indicies and returns array.
     */
    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    const pivotNum = arr[index1];
    let pivotIndex = index1;
    for (let i = index1 + 1; i <= index2; i++) {
        if (pivotNum > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }
    swap(arr, pivotIndex, index1);
    return pivotIndex;
}
exports.pivot = pivot;
// console.log(pivot([5,1,6,2,7,9,3]))
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
exports.quickSort = quickSort;
// quickSort([5, 1, 6, 2, 7, 9, 3, -5]);

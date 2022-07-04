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

/**
 * Inputs array, starting index, and ending index.
 * Indicies default to 0 and array length minus one if not provided.
 */
export function pivot(
  arr: number[],
  index1: number = 0,
  index2: number = arr.length - 1
): number {
  // helper function to swap values in array
  /**
   * Accepts array, index1, and index2 as arguments.
   * Swaps values of indicies and returns array.
   */
  function swap(arr: number[], index1: number, index2: number): number[] {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  }

  const pivotNum: number = arr[index1];
  let pivotIndex: number = index1;

  for (let i = index1 + 1; i <= index2; i++) {
    if (pivotNum > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }

  swap(arr, pivotIndex, index1);

  return pivotIndex;
}

// console.log(pivot([5,1,6,2,7,9,3]))

export function quickSort(
  arr: number[],
  // starts randomly to avoid performance problem with mostly or already sorted arrays
  left: number = Math.floor(Math.random() * arr.length - 1),
  right: number = arr.length - 1
): number[] {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// quickSort([5, 1, 6, 2, 7, 9, 3, -5]);

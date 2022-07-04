/**
 * BIG O: O(n log(n))
 */

/**
*Takes 2 sorted arrays and combines them. Returns a single sorted array
*/
export function merge(arr1:number[], arr2:number[]):number[]{
    // Empty array that will have arr1 and arr2 merged together into
    const returnArray: number[] = [];
    let i: number = 0;
    let j: number = 0;

    /**
     * compares minimum values of arr1 and arr2
     * pushes minimum value to returnArray and increments i or j
     */ 
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            returnArray.push(arr1[i]);
            i++;
        } else {
            returnArray.push(arr2[j]);
            j++;
        }
    }

    /**
     * pushes remaining arr1 values
     */
    while(i<arr1.length){
        returnArray.push(arr1[i]);
        i++;
    }    

    /**
     * pushes remaining arr2 values
     */
    while(j<arr2.length){
        returnArray.push(arr2[j]);
        j++;
    }

    return returnArray;
};

// merge([1,10,50], [2,14,99,100])

export function mergeSort(arr: number[]):number[]{
    if(arr.length <= 1) return arr;
    let mid: number = Math.floor(arr.length / 2);
    let left:number[] = mergeSort(arr.slice(0, mid));
    let right:number[] = mergeSort(arr.slice(mid));
    return merge(left,right);
}


// console.log(mergeSort([10,24,76,73,72,1,9]))
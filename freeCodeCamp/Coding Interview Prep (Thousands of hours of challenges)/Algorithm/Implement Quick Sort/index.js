// Algorithms: Implement Quick Sort
// Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.
// In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value.
// We then combine the result of recursively calling the quick sort algorithm on both sub-arrays.
// This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement.
// These attributes make it a popular and useful sorting method.

// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
// While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

// quickSort should be a function.

// quickSort should return a sorted array (least to greatest).

// quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.

// quickSort should not use the built-in .sort() method.

function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
}

function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
        //Move all the small elements on the left side
        if (arr[i] < arr[left]) {
            swap(arr, i, shift + 1);
            shift++;
        }

    }

    //Finally swapping the last element with the left
    swap(arr, left, shift);

    return shift;
}


function quickSort(array, left = 0, rigth = array.length - 1) {

    if (left < rigth) {
        let pivotIndex = pivot(array, left, rigth);

        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, rigth);
    }


    // Only change code below this line
    return array;
    // Only change code above this line
}
quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])


function quickSort2(array) {
    if (array.length === 0) {
        return [];
    } else {
        const pivotValue = array[0];
        // Sort elements into three piles
        let lesser = [];
        let equal = [];
        let greater = [];
        for (let e of array) {
            if (e < pivotValue) {
                lesser.push(e);
            } else if (e > pivotValue) {
                greater.push(e);
            } else {
                equal.push(e);
            }
        }
        return [...quickSort2(lesser), ...equal, ...quickSort2(greater)];
    }
}

//[9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
//[6, 7, 5, 2, 3, 9, 14, 12, 10, 11] return 5
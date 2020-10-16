// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

// Note:
// We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!

// insertionSort should be a function.

// insertionSort should return a sorted array (least to greatest).

// insertionSort should return an array that is unchanged except for order.

// insertionSort should not use the built-in .sort() method.

function insertionSort(array = []) {
    // Only change code below this line

    let j = 1;

    while (j <= array.length) {

        if (array[j] < array[j - 1]) {

            for (let i = j; i >= 0; i--) {
                if (array[j] >= array[i] && i !== j) {
                    console.log(array[j], array[i]);
                    //
                    array.splice(i + 1, 0, array[j])
                    array.splice(j + 1, 1);

                    break;
                }
            }
        }


        j++;

    }

    return array;
    // Only change code above this line
}


insertionSort([1, 4, 2, 8]);
insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
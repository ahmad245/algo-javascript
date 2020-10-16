// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

// Note:
// We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!

// selectionSort should be a function.

// selectionSort should return a sorted array (least to greatest).

// selectionSort should return an array that is unchanged except for order.

// selectionSort should not use the built-in .sort() method.

function selectionSort(array = []) {
    // Only change code below this line
    // Only change code below this line
    let min = 0;
    let j = 1;
    let length = array.length;
    while (j < length) {
        for (let i = j; i < array.length; i++) {
            min = array[min] < array[i] ? min : i;
        }

        let temp = array[min];
        array[min] = array[j];
        array[j] = temp;
        j++;
        min = j;

    }

    return array;
    // Only change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
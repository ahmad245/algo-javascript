// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product. After the algorithm has finished, there will be a single element left in the array. Return that element.
// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be arrayConversion(inputArray) = 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

const arrayConversion = (inputArray = [1, 2, 3, 4, 5, 6, 7, 8]) => {


    for (let i = 0; i < inputArray.length; i++) {
        inputArray.splice(i, 2, inputArray[i] + inputArray[i + 1])
    }
    for (let i = 0; i < inputArray.length; i++) {

        inputArray.splice(i, 2, inputArray[i] * inputArray[i + 1])
    }
    return inputArray.reduce((ac, item) => ac + item, 0);

}
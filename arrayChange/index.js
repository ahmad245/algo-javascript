// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.


const arrayChange = (arr = []) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] <= arr[i]) {
            count += arr[i] - arr[i + 1] + 1;
            arr[i + 1] = arr[i] + 1;

        }
    }
    return count;
}






function arrayChange2(inputArray) {

    let count = 0;

    if (inputArray.length == 1) {
        return count;
    }

    for (let i = 1; i < inputArray.length; i++) {
        console.log(inputArray[i] - (inputArray[i - 1] + 1));
        if (inputArray[i] > inputArray[i - 1]) {
            continue;
        } else {
            count += Math.abs(inputArray[i] - (inputArray[i - 1] + 1));
            inputArray[i] = inputArray[i - 1] + 1;
        }

    }
    return count
}
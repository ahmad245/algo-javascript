// Largest Sum Contiguous Subarray

// Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.
// Lets take the example:
// {-2, -3, 4, -1, -2, 1, 5, -3} =>[4,-1,-2,1,5]=7
//[]=>[];
// [0, 0]=>[0]
// [0, 0, 1]=>[0, 0, 1]
// [0, 0, 1, 2]=>[0, 0, 1, 2]
// [0, 0, -1, 2]=>[2]
// [-1, -2, -3, -4, -5]=>[-1]
// [1, 2, 3, 2, 3, 4, 5]=>[1, 2, 3, 2, 3, 4, 5]
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]=>[4, -1, 2, 1]
// [-2, -3, 4, -1, -2, 1, 5, -3]=>[4, -1, -2, 1, 5]
// [1, -3, 2, -5, 7, 6, -1, 4, 11, -23]=>[7, 6, -1, 4, 11]

const bfMaximumSubarray = (arr = [-2, -3, 4, -1, -2, 1, 5, -3]) => {
    let max = -Infinity;
    let startEndex = 0;
    let endEndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > max) {
                startEndex = i;
                endEndex = j + 1;
                max = sum;
            }


        }
    }
    return arr.slice(startEndex, endEndex);
}
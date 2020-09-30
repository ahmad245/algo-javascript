// Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral.
// You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

// The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image
// pixels' values from the 3 × 3 square with the center at x.
// All pixels at the edges are cropped.

// As pixel's value is an integer, all fractions should be rounded down.

// Example

// For

// image = [[1, 1, 1], 
//         [1, 7, 1], 
//         [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// In the given example all boundary pixels were cropped,
// and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = rounded down = 1.

// Hints

// push()
// Math.floor()
// Input/Output

// [time limit] 4000ms (js)
// [input] array.array.integer image
// An image is stored as a rectangular matrix of non-negative integers.

// Guaranteed constraints:

// 3 ≤ image.length ≤ 10,

// 3 ≤ image[0].length ≤ 10,

// 0 ≤ image[i][j] ≤ 255.

// [output] array.array.integer
// A blurred image.



// The pixels in an image are represented as integers.After blurring each pixel‘ x’ of the resulting image has a value equal to the average of the pixels surrounding‘ x’ including‘ x’.For example, consider a 3 * 3 image as

// image = \begin { bmatrix }
// 1 & 1 & 1\\ 1 & 7 & 1\\ 1 & 1 & 1\ end { bmatrix }
// Then, the resulting image after blur is blurred_image = \begin { bmatrix }
// 1\ end { bmatrix }
// So, the pixel of blurred image is calculated as(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 1.66666 = 1

// Box Blur Algorithm–
// Box blur is also known as box linear filter.Box blurs are frequently used to approximate Gaussian blur.

// A box blur is generally implemented as an image effect that affects the whole screen.The blurred colour of the current pixel is the average of the current pixel’ s colour and its 8 neighbouring pixels.
// FOr Example, Consider the below image.
// image = \begin { bmatrix }
// 7 & 4 & 0 & 1\\ 5 & 6 & 2 & 2\\ 6 & 10 & 7 & 8\\ 1 & 4 & 2 & 0\ end { bmatrix }
// It’ s blurred image is given below:
//     blurred\ _image = \begin { bmatrix }
// 5 & 4\\ 4 & 4\ end { bmatrix }

// Explanation:
//     There are four 3 * 3 matrix possible in the above image.So there are 4 blurred pixel in the resulting image.The four matrices are:

//     \begin { bmatrix }
// 7 & 4 & 0\\ 5 & 6 & 2\\ 6 & 10 & 7\ end { bmatrix },

//     \begin { bmatrix }
// 4 & 0 & 1\\ 6 & 2 & 2\\ 10 & 7 & 8\ end { bmatrix },

//     \begin { bmatrix }
// 5 & 6 & 2\\ 6 & 10 & 7\\ 1 & 4 & 2\ end { bmatrix },
//     and\ begin { bmatrix }
// 6 & 2 & 2\\ 10 & 7 & 8\\ 4 & 2 & 0\ end { bmatrix }

// image =
//  [
//      [7, 4, 0, 1],  
//      [5, 6, 2, 2],  
//      [6, 10, 7, 8],  
//      [1, 4, 2, 0]
//    ] 

const boxBlur = (arr = []) => {
    let row = 0;
    let col = 0;
    let colEnd = 3;
    let rowEnd = 3;

    let arrStart = 1;

    let length = Math.max(arr.length, arr[0].length);

    let result = [];

    while (arrStart <= length && row < arr.length - 2) {
        let sum = 0;
        for (let i = row; i < rowEnd; i++) {
            for (let j = col; j < colEnd; j++) {
                sum += arr[i][j];
            }
        }
        if (colEnd == length) {
            row++;
            rowEnd++;
            col = 0;
            colEnd = 3;
        } else {
            col++;
            colEnd++;
        }
        result.push([Math.floor(sum / 9)]);
        arrStart++;

    }
    return result;
}



boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
]);

boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
]);

boxBlur([
    [36, 0, 18, 9],
    [27, 54, 9, 0],
    [81, 63, 72, 45]
]);
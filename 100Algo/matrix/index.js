// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//    [
//     [1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]
//         ]

//
//
//
//
//

function matrix(n) {
    return solution(n);
}

function solution(n) {
    let result = [];

    let counter = 1;
    let colStart = 0;
    let colEnd = n - 1;
    let rowStart = 0;
    let rowEnd = n - 1;

    for (let index = 0; index < n; index++) {
        result.push([]);
    }

    while (colStart <= colEnd && rowStart <= rowEnd) {

        // 1-first loop (first row) 
        // 2-second loop (last column)
        // 3-third loop (last row)
        // 4-first column

        // 1- after first loop (from colStart to colEnd) we will increase the rowStart 
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart][i] = counter;
            counter++;
        }
        rowStart++;

        //2-second loop (from rowStart to rowEnd) decrease colEnd
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][colEnd] = counter;
            counter++;
        }
        colEnd--;

        // 3-third loop (from colEnd to colStart)
        for (let i = colEnd; i >= colStart; i--) {
            result[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

        // 4-last loop first colum (from rowEnd to rowStart)
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i][colStart] = counter;
            counter++;
        }
        colStart++;


    }
    return result;

}

module.exports = matrix;
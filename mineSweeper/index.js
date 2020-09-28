// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. 
// Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],     //    true flase =>2
//          [false, true, false],                 true   
//          [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1], [2, 1, 1], [1, 1, 1]]
// Check out the image below for better understanding:


function minesweeper(matrix = []) {

    let mm = [];
    for (let i = 0; i < matrix.length; i++) {
        mm.push([])
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                mm[i][j] = 1;

            } else {
                // 00
                if (i == 0 && j == 0) {
                    mm[i][j] = (matrix[i][j + 1]) + (matrix[i + 1][j]);

                }
                // 01
                else if (i == 0 && j > 0 && j !== matrix[i].length - 1) {
                    mm[i][j] = (matrix[i][j - 1]) + (matrix[i][j + 1]) + (matrix[i + 1][j])
                }
                //02
                else if (i == 0 && j == matrix[i].length - 1) {
                    mm[i][j] = (matrix[i][j - 1]) + (matrix[i + 1][j]);

                }

                // 20
                else if (i == matrix.length - 1 && j == 0) {
                    mm[i][j] = (matrix[i - 1][j]) + (matrix[i][j + 1]);

                }

                // 21
                else if (i == matrix.length - 1 && j > 0 && j !== matrix[i].length - 1) {
                    mm[i][j] = (matrix[i][j - 1]) + (matrix[i][j + 1]) + (matrix[i - 1][j])

                }
                // 22
                else if (i == matrix.length - 1 && j == matrix[i].length - 1) {
                    mm[i][j] = (matrix[i][j - 1]) + (matrix[i - 1][j])

                }
                // 10
                else if (i > 0 && i !== matrix.length - 1 && j == 0) {
                    mm[i][j] = (matrix[i - 1][j]) + (matrix[i + 1][j]) + (matrix[i][j + 1])

                }
                // 12
                else if (i > 0 && i !== matrix.length - 1 && j == matrix[i].length - 1) {
                    mm[i][j] = (matrix[i - 1][j]) + (matrix[i + 1][j]) + (matrix[i][j - 1])
                } else {
                    mm[i][j] = (matrix[i][j + 1]) + (matrix[i][j - 1]) + (matrix[i + 1][j]) + (matrix[i - 1][j])
                }
                mm[i][j] = mm[i][j] == 0 ? 1 : mm[i][j];


            }


        }

    }
    return mm;
}
console.log(minesweeper([
    [true, false, false, true],
    [false, true, false, true],
    [false, false, false, true]
]));
console.log(minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]));



// {
//     if (i + 1 >= matrix.length) {
//         mm[i][j] = (matrix[i][j + 1]) + (matrix[i][j - 1]) + (matrix[i - 1][j])
//     } else if (i - 1 < 0) {
//         mm[i][j] = (matrix[i][j + 1]) + (matrix[i][j - 1]) + (matrix[i + 1][j])
//     } else if (j + 1 >= matrix[i].length) {
//         mm[i][j] = (matrix[i][j - 1]) + (matrix[i + 1][j]) + (matrix[i - 1][j])
//     } else if (j - 1 < 0) {
//         mm[i][j] = (matrix[i][j + 1]) + (matrix[i + 1][j]) + (matrix[i - 1][j])
//     } else {
//         mm[i][j] = (matrix[i][j + 1]) + (matrix[i][j - 1]) + (matrix[i + 1][j]) + (matrix[i - 1][j])
//     }

// }
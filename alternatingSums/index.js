// Several people are standing in a row and need to be divided into two teams. 
//The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. 
//Return an array of two integers, where the first element is the total weight of team 1, 
//and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].

function alternatingSums(a = []) {
    let result = [];
    let sum1 = 0;
    let sum2 = 0;
    a.forEach((el, i) => {
        if (i % 2 == 0) {
            sum1 += el;
        } else {
            sum2 += el;
        }
    })
    result.push(sum1, sum2);
    return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
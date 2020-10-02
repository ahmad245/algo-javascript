// There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time.
// Count the number of ways, the person can reach the top.

// Consider the example shown in the diagram. The value of n is 3. There are 3 ways to reach the top. The diagram is taken from Easier Fibonacci puzzles

// Examples:

// Input: n = 1
// Output: 1
// There is only one way to climb 1 stair

// Input: n = 2
// Output: 2
// There are two ways: (1, 1) and (2)

// Input: n = 4
// Output: 5
// (1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (1, 2, 1), (2, 2)

// 4 = 1 1 1 1 
//     2   1 1
//     1 2   1
//     1 1   2
//     2     2 


// 8 = 1 1 1 1 1 1 1 1 
//     2   1 1 1 1 1 1  
//     1 2   1 1 1 1 1 
//     1 1 1 2   1 1 1
//     1 1 1 1 2   1 1
//     1 1 1 1 1 2   1
//     1 1 1 1 1 1   2
//     2   1 1 1 1 1 1
//    
// We can easily find the recursive nature in the above problem. 
// The person can reach nth stair from either (n-1)th stair or from (n-2)th stair. 
// Hence,for each stair n, we try to find out the number of ways to reach n-1th stair and n-2th stair and add them to give the answer for the nth stair. 
// Therefore the expression for such an approach comes out to be :
module.exports.recursiveStaircaseMEM = (stairsNum) => {

    let memo = [];

    if (stairsNum <= 0) {
        // There is no way to go down - you climb the stairs only upwards.
        // Also if you're standing on the ground floor that you don't need to do any further steps.
        return 0;
    }

    if (stairsNum === 1) {
        // There is only one way to go to the first step.
        return 1;
    }

    if (stairsNum === 2) {
        // There are two ways to get to the second steps: (1 + 1) or (2).
        return 2;
    }
    if (memo[stairsNum]) {
        return memo[stairsNum];
    }
    memo[stairsNum] = recursiveStaircaseIT(stairsNum - 1) + recursiveStaircaseIT(stairsNum - 2);

    return memo[stairsNum];

}
// You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins,
// but you are trying to use as few coins as possible.

// The coin values available in Bananaland are stored in a sorted array coins. 
// coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1].

// Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.

// Example

// For coins = [1, 2, 10] and price = 28, the output should be minimalNumberOfCoins(coins, price) = 6.

// You have to use 10 twice, and 2 four times.

function minimalNumberOfCoins(coins = [], price) {
    let result = [];
    let p = price;
    for (let i = coins.length - 1; i > 0; i--) {
        // 28 / 10 => 2.8 =>floor=>2 (2 of 10)
        let r = Math.floor(p / coins[i])
            // push (10 10) to result
        for (let j = 0; j < r; j++) {
            result.push(coins[i]);
        }
        // p => 28 % 10 => 8 
        p = p % coins[i];


    }
    return result;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
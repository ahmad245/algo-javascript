// Algorithms: Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.
// The function updateInventory should return an array.
// updateInventory(
// [
//   [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
// ], 
// [
//     [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
// ])
// should return an array with a length of 6.

// updateInventory(
// [
//     [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
// ],
// [
//     [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
// ])
// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// Passed
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    if (arr1.length < 1) return arr2.sort((a, b) => {
        if (a[1] < b[1]) { return -1; }
        if (a[1] > b[1]) { return 1; }
        return 0;
    });
    if (arr2.length < 1) return arr1.sort((a, b) => {
        if (a[1] < b[1]) { return -1; }
        if (a[1] > b[1]) { return 1; }
        return 0;
    });
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let isExist = check(arr2, arr1[i][1])
        if (isExist) {
            result.push([isExist + arr1[i][0], arr1[i][1]])
        } else {
            result.push(arr1[i]);
        }
    }
    result.push(...arr2);
    return result.sort((a, b) => {
        if (a[1] < b[1]) { return -1; }
        if (a[1] > b[1]) { return 1; }
        return 0;
    })

}

const check = (arr = [], el) => {
    let index = arr.findIndex((e) => { return e[1] === el });

    let result = index !== -1 ? arr[index][0] : false;
    if (result) {
        arr.splice(index, 1);
    }

    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
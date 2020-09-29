// Thumbtack helps Professionals (Pros) grow their business by identifying new customers. Upon registering on Thumbtack,
// a Pro specifies which categories of services they provide. 
// To help match customer requests with qualified Pros, Thumbtack maintains a list of Pros grouped by service categories.

// Given a list of pros and their category preferences, return the list of Pros for each category.

// Example

// For pros = ["Jack", "Leon", "Maria"] and

// preferences = [
//["Computer repair", "Handyman", "House cleaning"],
// ["Computer lessons", "Computer repair", "Data recovery service"],
// ["Computer lessons", "House cleaning"]
//]

//            the output should be
// proCategorization(pros, preferences) = [
//[["Computer lessons"], ["Leon", "Maria"]],
// [["Computer repair"], ["Jack", "Leon"]], 
//[["Data recovery service"], ["Leon"]],
// [["Handyman"], ["Jack"]],
// [["House cleaning"], ["Jack", "Maria"]]
//]

function proCategorization(pros = [], preferences = []) {

    let obj = {};
    let result = [];
    for (let i = 0; i < preferences.length; i++) {
        for (let j = 0; j < preferences[i].length; j++) {
            obj[preferences[i][j]] = obj[preferences[i][j]] || [];
            obj[preferences[i][j]].push(pros[i])
        }
    }

    for (const key in obj) {
        result.push([
            [key],
            [obj[key]]
        ])
    }

    return result
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [
    ["Computer repair", "Handyman", "House cleaning"],
    ["Computer lessons", "Computer repair", "Data recovery service"],
    ["Computer lessons", "House cleaning"]
]));

// obj
// Computer lessons: (2) ["Leon", "Maria"]
// Computer repair: (2) ["Jack", "Leon"]
// Data recovery service: ["Leon"]
// Handyman: ["Jack"]
// House cleaning: (2) ["Jack", "Maria"]
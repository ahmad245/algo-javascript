var t0 = performance.now()

function containsDuplicates(a = []) {

    let obj = {};
    for (const item of a) {
        obj[item] = obj[item] + 1 || 1;
    }

    return Math.max(...Object.values(obj)) > 1 ? true : false;

}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));


function containsDuplicates2(a = []) {

    let sortedArray = a.sort((a, b) => a - b);

    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) return true;
    }
    return false;

}

console.log(containsDuplicates2([1, 2, 3, 1]));
console.log(containsDuplicates2([3, 1]));

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
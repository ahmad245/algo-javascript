const almostIncreasingSequence = (sequence = [1, 3, 1]) => {
    let count = 0;

    sequence.map((num, i) => {
        if (num <= sequence[i - 1]) {
            count++;
            if (num <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    })

    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))

const almostIncreasingSequence2 = (arr = [1, 3, 1]) => {
    let isIncreasingSequence = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isIncreasingSequence = checkIncrease(
                arr.filter((el, index) => index !== i)
            );
            if (!isIncreasingSequence) {
                isIncreasingSequence = checkIncrease(
                    arr.filter((el, index) => index !== i - 1)
                );
            }
        }
    }
    return isIncreasingSequence;
};

const checkIncrease = (arr = []) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) return false;
    }

    return true;
};
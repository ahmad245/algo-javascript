function circleOfNumbers(n, firstNumber) {
    if (firstNumber > n / 2) return firstNumber - (n / 2)
    return (n / 2) + firstNumber
}

console.log(circleOfNumbers(10, 2));
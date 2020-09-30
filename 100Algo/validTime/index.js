// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be validTime(time) = true;

// For time = "25:51", the output should be validTime(time) = false;

// For time = "02:76", the output should be validTime(time) = false.

// Hints

// parseInt()
// split()

function validTime(time = '') {
    const [hours, minutes] = time.split(":");

    if (parseInt(hours) > 23 || parseInt(hours) < 0) {
        return false;
    }

    if (parseInt(minutes) > 59 || parseInt(minutes) < 0) {
        return false;
    }

    return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
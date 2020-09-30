// Check if a string(first argument, str) ends with the given target string(second argument, target).

// This challenge can be solved with the.endsWith() method, which was introduced in ES2015.But
// for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Remember to use Read - Search - Ask
// if you get stuck.Write your own code.

// Example

// confirmEnding("Abstraction", "action") returns true;
// confirmEnding("Open sesame", "pen") returns false;
// Hints

// substr()


function confirmEnding(string, target) {
    const start = string.length - target.length;

    return string.substr(start) === target;
}

console.log(confirmEnding("Discard", "card"));
console.log(confirmEnding("Outcompete", "compete"));
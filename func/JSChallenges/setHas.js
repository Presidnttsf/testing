// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function check(a, n) {
    return a.has(n)
}

console.log(check(new Set([1, 2, 3, 4]), 2.5));

console.log((new Set([1, 2, 3, 4])));
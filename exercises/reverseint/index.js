// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversedNumber = n.toString().split('').reverse().join('');
    return parseInt(reversedNumber) * Math.sign(n); // Returns -1 if n is negative else 1
}

module.exports = reverseInt;

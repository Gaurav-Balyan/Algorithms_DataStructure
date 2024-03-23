// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Use for loop
// function reverse(str) {
//     let reversedString = '';
//     for (let i = str.length -1; i >= 0; i--) {
//         reversedString = reversedString + str[i]; 
//     }
//     return reversedString;
// }

// Use Array reverse function
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Use for-of loop
// function reverse(str) {
//     let reversedString = '';
//     for(let character of str) {
//         reversedString = character + reversedString;
//     }
//     return reversedString;
// }

// Use reduce Array helper
function reverse(str) {
    return str.split('').reduce((accumulator, currentValue) => currentValue + accumulator, '');
}

module.exports = reverse;

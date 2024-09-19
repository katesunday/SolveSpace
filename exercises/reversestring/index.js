// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split("").reverse().join("");

//     let reversed = "";
//     for (let el of str) {
//         reversed = el + reversed;
//     }
//     return reversed;

    // return str.split("").reduce((a, b) => b + a, "");

    return str.split("").reduce((a, b) => b + a);
    //If initialValue is not specified, accumulator is initialized to the first value in the array
}

module.exports = reverse;

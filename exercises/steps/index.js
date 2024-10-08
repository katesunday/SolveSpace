// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let result = ""
//     let space = ""
//     for (let i = 1; i <= n; i++) {
//         space += " "
//     }
//     let totalSpaces = null;
//
//     for (let i = 1; i <= n; i++) {
//         for (let j = i; j <=i; j++) {
//             result += "#"
//             totalSpaces = space.slice(j)
//
//         }
//        console.log(result + totalSpaces)
//     }
// }

function steps(n) {

    for (let i = 0; i < n; i++) {
        let result = ""

        for (let k = 0; k < n; k++) {
            if (k <= i){
                result += '#'
            }
            else {
                result += " "
            }
        }
        console.log(result)
    }


}

steps(2)
module.exports = steps;

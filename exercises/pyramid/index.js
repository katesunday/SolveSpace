// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midpoint = Math.floor((n*2-1)/2)
//     for (let row = 0; row < n; row++) {
//         let stair = "";
//         for (let col = 0; col < n*2-1; col++) {
//             if(midpoint - row <= col && midpoint + row >= col){
//                 stair += "#"
//             }
//             else{
//                 stair += " "
//             }
//         }
//         console.log(stair)
//     }
// }

function pyramid(n,row = 0, stair = "", col = 0) {
    const midpoint = Math.floor((n*2-1)/2)

    if(n === row){
        return
    }
    if (stair.length === n*2-1){
        console.log(stair)
        return pyramid(n, row +1)
    }
    while (col <= midpoint *2){
        if(midpoint - row <= col && midpoint + row >= col){
            stair += "#"
        }
        else{
            stair += " "
        }
        col++
    }

    pyramid(n, row, stair)
}
pyramid(4)
module.exports = pyramid;

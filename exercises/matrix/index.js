// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = new Array(n).fill("").map(()=> new Array(n).fill(""));
    //пустая матрица
    console.log(result)

    let counter = 1;
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = n-1;

    while (startCol <= endCol && startRow <= endRow){
        //слева направо до конца и опуститься на уровень
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++
        }
        startRow++;

        //с конца вниз по крайним числам и убрать последнюю колонку
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++
        }
        endCol--;

        //снизу справа налево
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++
        }
        endRow--;

        //снизу по первым числам вверх
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter
            counter++
        }
        startCol++
    }

    console.log(result)
    return result

}
matrix(4)
module.exports = matrix;

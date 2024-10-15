// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let fibs = [];
    for (let i = 0; i <= n; ++i) {
       i-1 < 1 ? fibs.push(i) : fibs.push(fibs[i-1] + fibs[i-2]);
    }
    console.log(fibs)
    return fibs[n];
}
fib(7)
module.exports = fib;

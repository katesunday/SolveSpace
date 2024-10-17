// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    let lengthOne = sourceOne.data.length
    let lengthTwo = sourceTwo.data.length
    let result = []
    for (let i = 0; i < lengthOne; i++) {
        console.log('index', i)
         result.unshift(sourceOne.remove());
        for (let j = i; j < lengthTwo; j++) {
            j<=i && result.unshift(sourceTwo.remove());
        }
    }

    console.log("s", new Queue(result))
    return new Queue(result);
}

   const queueOne = new Queue();
   queueOne.add(1);
   queueOne.add(2);
   queueOne.add(3);
   queueOne.add(4);
   const queueTwo = new Queue();
   queueTwo.add('one');
   queueTwo.add('two');
   queueTwo.add('three');
   queueTwo.add('four');
   const q = weave(queueOne, queueTwo);
   q.remove() // 1
   q.remove() // 'Hi'
   q.remove() // 2
   q.remove() // 'There'

module.exports = weave;

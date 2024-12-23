// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor (queue = []) {
        this.queue = queue
    }
    add (item) {
       //this.queue.push(item)
       this.queue.unshift(item)
    }
    remove () {
        //return this.queue.shift()
        return this.queue.pop()
    }
}

    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    q.remove();
    q.remove();
module.exports = Queue;

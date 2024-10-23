// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const {LinkedList, Node} = require("./linkedlist");

function circular(list) {
    let slow = list.head
    let fast = list.head
    let counter = 0;
    while(fast.next && fast.next.next) {
        if(slow === fast && counter !==0){
            return true
        }
        slow = slow.next
        fast = fast.next.next
        counter++
    }
    return false
}
const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = null;
console.log(circular(l));
module.exports = circular;

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data){
        !this.head ? this.head =  new Node(data) : new Node(data, this.head);
    }
    size() {
        let root = this.head;
        let length = 0;
        while (root != null) {
            root = root.next;
            ++length;
        }
        return length;
    }
    getFirst(){
        //	Returns the first node of the linked list.
    }
    getLast(){
        //	Returns the last node of the linked list
    }
    clear(){
        //Empties the linked list of any nodes.
    }
    removeFirst(){
       // Removes only the first node of the linked list. The list's head should now be the second element.
    }
    removeLast(){

    }
    insertLast(){

    }
    getAt(index){
        //	Returns the node at the provided index
    }
    removeAt(index){
        //Removes node at the provided index
    }
    insertAt(data,index){
        //	Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.
    }
    forEach(){
        //	Calls the provided function with every node of the chain
    }
}

const n = new Node('There');
//console.log(n.data) // 'Hi'
console.log(n) // null
const n2 = new Node('HOi', n);
console.log('n2',n2) // returns n

const list = new LinkedList();
console.log(list.head) // null

list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
console.log("size",list.head,list.size()); // returns 3

module.exports = { Node, LinkedList };

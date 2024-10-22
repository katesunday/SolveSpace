// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data){
         this.head = new Node(data, this.head);
    }
    size() {
        let length = 0
        let node = this.head
        // while(this.head !== null) {
        //  this.head = this.head.next
        //  length++
        // }
        while(node){
            length++
           node = node.next;
        }
        return length;
    }
    getFirst(){
        //	Returns the first node of the linked list.
        return this.head
    }
    getLast(){
        //	Returns the last node of the linked list

        if(!this.head){
            return null
        }
        // while(this.head.next ){
        //     this.head = this.head.next
        //     node = this.head
        // }
        let node = this.head
        while(node){
            if(!node.next){
                return node
            }
            node = node.next;
        }
        return node;
    }
    clear(){
        //Empties the linked list of any nodes.
        this.head = null;
    }
    removeFirst(){
       // Removes only the first node of the linked list. The list's head should now be the second element.
        if (!this.head){
            return
        }
        this.head = this.head.next
    }
    removeLast(){
        if (!this.head){
            return;
        }
        if (!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;


    }
    insertLast(data){
        let last = this.getLast();
        last ? last.next = new Node(data) : this.head = new Node(data);
    }
    getAt(index){
        //	Returns the node at the provided index
        let counter = 0;
        let node = this.head;
         while (node) {
             if (counter === index) {
                 return node
             }
             node = node.next;
             counter++
         }
         return node
    }
    removeAt(index){
        //Removes node at the provided index
        //let toRemove = this.getAt(index);
        let previous = this.getAt(index-1);
        let afterRemoved = this.getAt(index+1);
        if(previous){
            previous.next = afterRemoved
        }
        else{
            this.head = afterRemoved
        }

    }
    insertAt(data,index){
        //	Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.
    }
    forEach(){
        //	Calls the provided function with every node of the chain
    }
}

//const n = new Node('There');
//console.log(n.data) // 'Hi'
//console.log(n) // null
//const n2 = new Node('HOi', n);
//console.log('n2',n2) // returns n

const list = new LinkedList();
//console.log(list.head) // null

list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
//console.log("size",list,list.size()); // returns 3

const l = new LinkedList();
l.insertFirst('d');
l.insertFirst('c');
l.insertFirst('b');
l.insertFirst('a');
l.removeFirst();
console.log('start',l.head);
//console.log(l.size());
console.log('xx',l.head);
console.log(l.getFirst());
// l.removeFirst();
// expect(l.size()).toEqual(1);
// expect(l.getFirst().data).toEqual('c');

module.exports = { Node, LinkedList };

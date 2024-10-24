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
         // this.head = new Node(data, this.head);
        this.insertAt(data,0)
    }
    size() {
        let length = 0
        let node = this.head
        while(node){
            length++
           node = node.next;
        }
        return length;
    }
    getFirst(){
        //	Returns the first node of the linked list.
        // return this.head
        return this.getAt(0)
    }
    getLast(){
        //	Returns the last node of the linked list

        // if(!this.head){
        //     return null
        // }
        // let node = this.head
        // while(node){
        //     if(!node.next){
        //         return node
        //     }
        //     node = node.next;
        // }
        // return node;
        return this.getAt(this.size()-1)
    }
    clear(){
        //Empties the linked list of any nodes.
        this.head = null;
    }
    removeFirst(){
       // Removes only the first node of the linked list. The list's head should now be the second element.
       //  if (!this.head){
       //      return
       //  }
       //  this.head = this.head.next
        this.removeAt(0)
    }
    removeLast(){
        // if (!this.head){
        //     return;
        // }
        // if (!this.head.next){
        //     this.head = null;
        //     return;
        // }
        //
        // let previous = this.head;
        // let node = this.head.next;
        // while(node.next){
        //     previous = node;
        //     node = node.next;
        // }
        // previous.next = null;
        this.removeAt(this.size()-1)


    }
    insertLast(data){
        // let last = this.getLast();
        // last ? last.next = new Node(data) : this.head = new Node(data);
         this.insertAt(data, this.size());
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
        let previous = this.getAt(index - 1);
        let current = this.getAt(index);

        if(index > this.size()){
            this.insertLast(data)
            return
        }
        if(previous){
            previous.next = new Node(data, current)
        }
        else{
            this.head = new Node(data, current)
        }
    }
    forEach( callback){
        //	Calls the provided function with every node of the chain
        let node = this.head
        let counter = 0;
        while(node){
            callback(node, counter)
            node = node.next;
            counter++;
        }
    }
    *[Symbol.iterator]() {
        let node = this.head
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };

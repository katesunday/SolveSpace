// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if(data < this.data && this.left){
           this.left.insert(data)
        }
        else if (data < this.data ){
            this.left = new Node(data);
        }
        else if(data > this.data && this.right){
            this.right.insert(data)
        }
        else if(data > this.data ){
            this.right = new Node(data);
        }
    }
    contains(data) {
        let result = null
        if(data === this.data){
            result = this
            return result
        }
        else if(data < this.data && this.left){
          return   this.left.contains(data)
        }
        else if(data > this.data && this.right){
          return   this.right.contains(data)
        }
     return result
    }
}

// const node = new Node(10);
// node.insert(5);
// node.insert(15);
// node.insert(17);
// console.log(node)
const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

const three = node.left.left.right;
console.log(node.contains(333), three.data);
module.exports = Node;

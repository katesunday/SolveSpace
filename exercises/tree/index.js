// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }
    remove(data) {
        return this.children = this.children.filter((el)=>{
            return el.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(callback){
        debugger
       return  this.root.children.map((el)=>callback(el))
    }
    traverseDF(){

    }
}

// const letters = [];
// const t = new Tree();
// t.root = new Node('a');
// t.root.add('b');
// t.root.add('c');
// t.root.children[0].add('d');
// console.log(t)
// console.log(t.traverseBF(node => {
//     letters.push(node.data);
// }));

module.exports = { Tree, Node };

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
        const arr = [this.root]
        //пока есть длина то есть есть элементы внутри
        while(arr.length){
            //то узел это первое значение массива
            //на первой итерации массив осталя пустым
            let node = arr.shift();
            //в пустой массив кладем детей
            arr.push(...node.children)
            callback(node)
        }
    }
    traverseDF(callback){
        const arr = [this.root]
        while(arr.length){
            let node = arr.shift()
            arr.unshift(...node.children)
            callback(node)
        }

    }
}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.traverseBF(node => {
   return  letters.push(node.data);
});

const letters2 = [];
const t2 = new Tree();
t2.root = new Node('a');
t2.root.add('b');
t2.root.add('d');
t2.root.children[0].add('c');

t2.traverseDF(node => {
    letters2.push(node.data);
});
console.log(letters2,'letters2')
module.exports = { Tree, Node };

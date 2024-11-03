// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require("./node");

function levelWidth(root) {
    // массив для пересчета ширины
    const counters = [0]
    //массив по которому идем
    // null это проверка на конец строки
    const arr = [root,null]
    while(arr.length >1){
        //забираем первый узел
        let node = arr.shift();

        if(node === null){
            counters.push(0)
            arr.push(null)
        } else {
            arr.push(...node.children)
            counters[counters.length - 1]++
        }
    }
    console.log(counters)
    return counters
}

// const root = new Node(0);
// root.add(1);
// root.add(2);
// root.add(3);
// root.children[0].add(4);
// root.children[2].add(5);
// levelWidth(root)
//
// const root2 = new Node(0);
// root2.add(1);
// root2.children[0].add(2);
// root2.children[0].add(3);
// root2.children[0].children[0].add(4);
// levelWidth(root)
module.exports = levelWidth;

const validate = require("./index");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}

const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
n.left.left.right = new Node(999);
console.log(n)

console.log(validate(n))
module.exports = Node;

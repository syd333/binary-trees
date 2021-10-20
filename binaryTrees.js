// ** TREE
// data structure that consists of nodes in a parent / child relationship

// trees = nonlinear!
// HTML DOM (tree structure) = parent/child relationships

// ** BINARY TREE

//BIG 0 NOTATION // (NOT guaranteed)
// insert = O(log n)
// search = O(log n)

// at most each node can have 2 children
// BTS are sorted in particular way
// used to store data that can be compared and sortable
// all items less than highest node are stored on left
// all items greater than highest node are stored on right side

// INSERT PSEUDOCODE
// iteratively or recursively
// create new node
// starting at the root
// check if there is a root - the root now becomes new node
// if there is a root, check if value of new node is greater than or less than
// if greater
// check to see if there is a node to right
// if there is, mode to that node & repeat these steps
// if there is not, add that node as right property
// if less
// check to see if there is node to the left
// if there is, move to that node & repeat these steps
// if there is not, add that node as left property

// FIND PSEUDOCODE
// iteratively or recursively
// create new node
// check if there is a root - were done searching
// if there is a root, check if value of new node is value we are looking for
// if we found it - were done
// if not check to see if value is greater than or less than value or root
// if it is greater
// check to see if there is a right node
// if there is, move to that node and repeat these steps
// if there is not were done
// if it is less
// check to see if there is a left node
// if there is, move to that node and repeat these steps
// if there is not were done

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    // start at top parent
    while (true) {
      if (value === current.value) return undefined;
      // if number is less than (LEFT side)
      if (value < current.value) {
        if (current.left === null) {
          // need to know if there is a left side first
          current.left = newNode;
          // place number in left space
          return this;
        }
        current = current.left;
      } else {
        // if number is greater than (RIGHT side)
        if (current.right === null) {
          current.right = newNode;
          // need to know if there is a right side first
          // place number in right space
          return this;
        }
        // then go down tree
        // see if num is greater than next child
        // then replace current
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
      // returning node
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
    // returning true or false if node is found in BTS
  }
}

//          10
//     5          13
//   2   7     11    16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

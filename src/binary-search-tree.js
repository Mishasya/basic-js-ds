const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

*/
class BinarySearchTree {
  constructor() {
    this.base = null
  }

  root() {

  }

  add(data) {
    let newNode = new Node(data)
    if(!this.base) {
      this.base = newNode
      return
    }

    let currentNode = this.base

    while(currentNode) {
      if(newNode.value < currentNode.value) {
        if(!currentNode.left) {
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      }
    }
  }
  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
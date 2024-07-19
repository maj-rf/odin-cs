import { Node } from './Node';
import { prettyPrint } from './prettyPrint';

class Tree {
  private _root?: Node;
  constructor(array: number[]) {
    this._root = this.buildTree(array);
  }

  get root() {
    return this._root;
  }

  set root(node: Node | undefined) {
    this._root = node;
  }

  private buildTree(arr: number[]) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    if (sorted.length === 0) return undefined;
    /**
     * 1. take the midpoint of the sorted array.
     * 2. create a Node using the midpoint & use
     *    recursion to build the left node & right nodes.
     */
    const mid = Math.floor(sorted.length / 2);
    const node = new Node(sorted[mid]);
    node.left = this.buildTree(sorted.slice(0, mid));
    node.right = this.buildTree(sorted.slice(mid + 1));
    return node;
  }

  private insertRecursion(key: number, root: Node | undefined) {
    if (typeof root === 'undefined') root = new Node(key);
    if (key > root.key) {
      root.right = this.insertRecursion(key, root.right);
    } else if (key < root.key) {
      root.left = this.insertRecursion(key, root.left);
    }
    return root;
  }

  private getMinValueOfTree(root: Node | undefined) {
    if (!root) return;
    while (root.left) {
      root = root.left;
    }
    return root.key;
  }

  private deleteRecursion(key: number, root: Node | undefined) {
    /**
     * 1. Deleting a leaf. Only change the node that points to that tree.
     * 2. Delete a node with 1 child. The deleted node's parent will point
     *    to the deleted node's child.
     * 3. Delete a node with left & right child. Find the inorder successor
     *   (the minimum value at the right node), cut and replace the deleted node.
     */
    if (!root) return;
    if (key > root.key) {
      root.right = this.deleteRecursion(key, root.right);
    } else if (key < root.key) {
      root.left = this.deleteRecursion(key, root.left);
    } else {
      if (root.left === undefined) return root.right;
      if (root.right === undefined) return root.left;
      const minValue = this.getMinValueOfTree(root.right);
      if (minValue) root.key = minValue;
      root.right = this.deleteRecursion(root.key, root.right);
    }
    return root;
  }

  insert(value: number) {
    this.insertRecursion(value, this.root);
  }

  deleteItem(value: number) {
    this.deleteRecursion(value, this.root);
  }

  find(value: number) {
    let root = this.root;
    if (!root) return;
    while (root) {
      if (value > root.key) root = root.right;
      else if (value < root.key) root = root.left;
      else return root;
    }
  }

  // TODO
  // levelOrder(callback)
  // inOrder(callback)
  // preOrder(callback)
  // postOrder(callback)
  // height(node)
  // depth(node)
  // isBalanced()
  // rebalance()
}

const tree = new Tree([2, 1, 3, 5, 7, 8, 6]);
tree.insert(9);
prettyPrint(tree.root);
tree.deleteItem(7);
prettyPrint(tree.root);
console.log(tree.find(9));

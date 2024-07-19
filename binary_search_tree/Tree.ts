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

  insert(value: number) {
    this.insertRecursion(value, this.root);
  }

  // TODO
  // deleteItem(value:number)
  // find(value:number)
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

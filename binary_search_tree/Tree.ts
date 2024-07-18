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
}

const tree = new Tree([2, 1, 3, 5, 7, 8, 6]);
prettyPrint(tree.root);

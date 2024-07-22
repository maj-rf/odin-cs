import { Node } from './Node';
//import { prettyPrint } from './prettyPrint';

export class Tree {
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

  // Breadth First Traversal (level by level)
  // use Queue : First In, First Out (FIFO)
  levelOrder(callback?: (value: number) => void) {
    if (!this.root) return [];
    const queue = [this.root];
    const results: number[] = [];
    while (queue.length) {
      // dequeue
      const node = queue.shift();
      if (!node) return;
      // queue if left or right nodes exist.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (callback) callback(node.key);
      results.push(node.key);
    }
    return results;
  }
  /**
   * 3 methods for depth-first traversal
   * use Stack: Last In, First Out (LIFO)
   */

  // preorder (root left right)
  preOrder(callback?: (value: number) => void) {
    if (!this.root) return [];
    const stack = [this.root];
    const results: number[] = [];
    while (stack.length) {
      const node = stack.pop();
      if (!node) return;
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      if (callback) callback(node.key);
      results.push(node.key);
    }
    return results;
  }

  /*  
  // Recursive preOrder 
  preOrder(callback?: Function) {
    const result: number[] = [];
    if (!this._root) return;
    this.preOrderTraversal(result, this._root, callback);
    return result;
  }

  preOrderTraversal(result: number[], node?: Node, callback?: Function) {
    if (!node) return result;
    if (callback) return callback(node);
    result.push(node.key);
    this.preOrderTraversal(result, node.left, callback);
    this.preOrderTraversal(result, node.right, callback);
  } 
  */

  // inorder (left root right)
  inOrder(callback?: (value: number) => void) {
    if (!this.root) return [];
    const stack: (Node | undefined)[] = [];
    const results: number[] = [];
    let currentNode = this._root;
    while (currentNode || stack.length) {
      while (currentNode?.key) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      const node = stack.pop();
      if (!node) return;
      if (callback) callback(node.key);
      results.push(node.key);
      currentNode = node.right;
    }
    return results;
  }

  /*   
  // Recursive inOrder
  inOrder(callback?: Function) {
    const result: number[] = [];
    if (!this._root) return;
    this.inOrderTraversal(result, this._root, callback);
    return result;
  }

  inOrderTraversal(result: number[], node?: Node, callback?: Function) {
    if (!node) return result;
    if (callback) return callback(node);
    this.inOrderTraversal(result, node.left, callback);
    result.push(node.key);
    this.inOrderTraversal(result, node.right, callback);
  } 
  */

  // postorder (left right root)
  postOrder(callback?: (value: number) => void) {
    if (!this.root) return [];
    const stack = [this.root];
    const results: number[] = [];
    while (stack.length) {
      const node = stack.pop();
      if (!node) return;
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      if (callback) callback(node.key);
      results.push(node.key);
    }
    return results.reverse();
  }

  /*   
  // Recursive postOrder
  postOrder(callback?: Function) {
    const result: number[] = [];
    if (!this._root) return;
    this.postOrderTraversal(result, this._root, callback);
    return result;
  }

  postOrderTraversal(result: number[], node?: Node, callback?: Function) {
    if (!node) return result;
    if (callback) return callback(node);
    this.postOrderTraversal(result, node.left, callback);
    this.postOrderTraversal(result, node.right, callback);
    result.push(node.key);
  } 
  */

  height(node: Node | undefined): number {
    if (!node) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  depth(node: Node | undefined, root = this._root): number {
    if (!node || !root) return -1;
    if (node.key === root.key) return 0;
    if (node.key < root.key) {
      return 1 + this.depth(node, root.left);
    } else {
      return 1 + this.depth(node, root.right);
    }
  }

  isBalanced(): boolean {
    if (!this.root) return true;
    const stack = [this.root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (!node) return false;
      const leftHeight = !node.left ? -1 : this.depth(node.left);
      const rightHeight = !node.right ? -1 : this.depth(node.right);
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    return true;
  }

  rebalance() {
    if (this.isBalanced()) return;
    const inorder = this.inOrder();
    this.root = inorder ? this.buildTree(inorder) : this._root;
  }
}

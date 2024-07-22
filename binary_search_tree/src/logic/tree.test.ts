import { Tree } from './Tree';
import { prettyPrint } from './prettyPrint';

const tree = new Tree([2, 1, 3, 5, 7, 8, 6]);
tree.insert(9);
prettyPrint(tree.root);
tree.deleteItem(7);
prettyPrint(tree.root);
console.log(tree.find(9)); // { _key: 9, _left: undefined, _right: undefined }
console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(tree.height(tree.root)); // 2
console.log(tree.height(tree.find(9))); // 0 -> leaf node
console.log(tree.height(tree.find(3))); // 0 -> also a leaf node
console.log(tree.depth(tree.find(5))); // 0 -> depth of root node
console.log(tree.depth(tree.find(2))); // 1
console.log(tree.depth(tree.find(11))); // -1
console.log(tree.isBalanced());

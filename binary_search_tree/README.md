# Binary Search Tree

## What is a Binary Tree?

A binary tree is a data structure in CS where each node has at most two children, often referred to as the left child and the right child. This structure allows for efficient searching, insertion, and deletion operations. Here are some key properties and concepts related to binary trees:

## Concepts

- `Node`: The basic unit of a binary tree containing a value or data, and pointers to its children.
- `Root`: The topmost node of a binary tree. It is the ancestor of all other nodes.
- `Leaf`: A node that has no children.
- `Height`: The length of the longest path from the root to a leaf.
- `Depth`: The length of the path from the root to a particular node.

```mermaid
   graph TD;
      5((5))---2((2))---1((1));
      5((5))---7((7))---6((6));
      2((2))---3((3))
      7((7))---8((8))
```

The Root node is `5`. The Leaves are `1, 3, 6, 8.` The depth of `5` which is the Root Node is `0`. The depth of `3` is `2` (5 -> 2 -> 3). The height of the tree is `2`.

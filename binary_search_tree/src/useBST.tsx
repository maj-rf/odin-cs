import { useState } from 'react';
import { Tree } from './logic/Tree';

export const useBST = () => {
  const [tree, setTree] = useState(
    new Tree([
      87, 12, 43, 90, 55, 68, 79, 23, 34, 21, 76, 18, 93, 45, 53, 67, 29, 74,
      15, 92,
    ])
  );

  const updateTree = (arr: number[]) => {
    setTree(new Tree(arr));
  };

  const insertNode = (node: number) => {
    setTree((prev) => {
      const newTree = new Tree([]);
      newTree.root = tree.root;
      newTree.insert(node);
      prev = newTree;
      return prev;
    });
  };

  const deleteNode = (node: number) => {
    setTree((prev) => {
      const newTree = new Tree([]);
      newTree.root = tree.root;
      newTree.deleteItem(node);
      prev = newTree;
      return prev;
    });
  };

  const rebalance = () => {
    setTree((prev) => {
      const newTree = new Tree([]);
      newTree.root = tree.root;
      newTree.rebalance();
      prev = newTree;
      return prev;
    });
  };

  return { tree, insertNode, updateTree, deleteNode, rebalance };
};

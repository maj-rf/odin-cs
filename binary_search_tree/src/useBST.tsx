import { useState } from 'react';
import { Tree } from './logic/Tree';

export const useBST = () => {
  const [tree, setTree] = useState(new Tree([1, 2, 3, 5, 6, 7, 8, 9]));

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

  return { tree, insertNode, updateTree };
};

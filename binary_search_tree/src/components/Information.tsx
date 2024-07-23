import { Tree } from '@/logic/Tree';

export const TreeInformation = ({ tree }: { tree: Tree }) => {
  return (
    <section className="text-sm px-2 my-4">
      <p className="text-lg font-bold">BST Information</p>
      <div className="break-words">{`Level Order: [${tree
        .levelOrder()
        ?.join(', ')}]`}</div>
      <div className="break-words">{`InOrder: [${tree
        .inOrder()
        ?.join(', ')}]`}</div>
      <div className="break-words">{`PostOrder: [${tree
        .postOrder()
        ?.join(', ')}]`}</div>
      <div className="break-words">{`PreOrder: [${tree
        .preOrder()
        ?.join(', ')}]`}</div>
      <div>{`isBalanced: ${tree.isBalanced(tree.root)}`}</div>
      <div>{`Height: ${tree.height(tree.root)}`}</div>
    </section>
  );
};

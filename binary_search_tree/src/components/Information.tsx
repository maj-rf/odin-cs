import { Tree } from '@/logic/Tree';

export const TreeInformation = ({ tree }: { tree: Tree }) => {
  return (
    <section className="text-sm">
      <p className="font-bold">BST Information</p>
      <div className="break-all">{`LevelOrder: [${tree
        .levelOrder()
        ?.toString()}]`}</div>
      <div className="break-all">{`InOrder: [${tree
        .inOrder()
        ?.toString()}]`}</div>
      <div className="break-all">{`PostOrder: [${tree
        .postOrder()
        ?.toString()}]`}</div>
      <div className="break-all">{`PreOrder: [${tree
        .preOrder()
        ?.toString()}]`}</div>
      <div className="break-all">{`isBalanced: ${tree.isBalanced(
        tree.root
      )}`}</div>
      <div className="break-all">{`Height: ${tree.height(tree.root)}`}</div>
    </section>
  );
};

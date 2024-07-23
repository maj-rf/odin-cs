import { prettyPrint } from '../logic/prettyPrint';
import { Node } from '../logic/Node';

export const PrintTree = ({ root }: { root: Node | undefined }) => {
  const arr = prettyPrint(root);

  return (
    <div className="whitespace-pre-wrap leading-5 bg-zinc-700 text-white p-8 w-full max-w-2xl mx-auto overflow-auto">
      {arr?.map((node) => {
        return <div key={node}>{node}</div>;
      })}
    </div>
  );
};

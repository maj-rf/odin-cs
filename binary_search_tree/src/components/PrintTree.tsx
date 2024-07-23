import { prettyPrint } from '../logic/prettyPrint';
import { Node } from '../logic/Node';

export const PrintTree = ({ root }: { root: Node | undefined }) => {
  const arr = prettyPrint(root);

  return (
    <div className="w-screen sm:w-full overflow-auto">
      <div className="whitespace-pre-wrap leading-5 bg-zinc-700 text-white p-8 min-w-max">
        {arr?.map((node) => {
          return <div key={node}>{node}</div>;
        })}
      </div>
    </div>
  );
};

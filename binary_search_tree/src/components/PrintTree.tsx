import { prettyPrint } from '../logic/prettyPrint';
import { Node } from '../logic/Node';

export const PrintTree = ({ root }: { root: Node | undefined }) => {
  const arr = prettyPrint(root);

  return (
    <div className="whitespace-pre-wrap">
      {arr?.map((node) => {
        return <div key={node}>{node}</div>;
      })}
    </div>
  );
};

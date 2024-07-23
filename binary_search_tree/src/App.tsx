import { PrintTree } from './components/PrintTree';
import { TreeForm } from './components/TreeForm';
import { useBST } from './useBST';

function App() {
  const { tree, insertNode } = useBST();

  return (
    <div>
      <p className="break-words">{`[${tree.inOrder()?.toString()}]`}</p>
      <TreeForm insertNode={insertNode} />
      <PrintTree root={tree.root} />
    </div>
  );
}

export default App;

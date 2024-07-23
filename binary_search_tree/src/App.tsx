import { Layout } from './components/Layout';
import { PrintTree } from './components/PrintTree';
import { TreeForm } from './components/TreeForm';
import { TreeInformation } from './components/Information';
import { useBST } from './useBST';

function App() {
  const bst = useBST();
  return (
    <Layout>
      <PrintTree root={bst.tree.root} />
      <TreeInformation tree={bst.tree} />
      <TreeForm {...bst} />
    </Layout>
  );
}

export default App;

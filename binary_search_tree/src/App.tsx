import { useState } from 'react';
import { Tree } from './logic/Tree';
import { PrintTree } from './components/PrintTree';

function App() {
  const [tree, setTree] = useState(new Tree([2, 1, 3, 5, 7, 8, 6, 9]));

  return (
    <div>
      <PrintTree root={tree.root} />
    </div>
  );
}

export default App;

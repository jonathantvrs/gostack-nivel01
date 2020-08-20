import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Item de Lista 1</li>
          <li>Item de Lista 2</li>
        </ul>
      </Header>
      <Header title="Projects">
        <p>Aqui não tem ítens de lista</p>
      </Header>
    </>
  );
}

export default App;

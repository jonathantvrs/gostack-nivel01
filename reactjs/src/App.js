import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Item de Lista 1</li>
          <li>Item de Lista 2</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>

        <button type="button" onClick={handleAddProject}>
          Add Project
        </button>
      </Header>
    </>
  );
}

export default App;

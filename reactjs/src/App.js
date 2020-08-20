import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImg from './assets/background.jpeg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Jonathan Tavares',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <img width={300} src={backgroundImg} alt="Bicicleta" />

      <Header title="Homepage">
        <ul>
          <li>Item de Lista 1</li>
          <li>Item de Lista 2</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
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

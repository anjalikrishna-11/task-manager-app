// U35346496
// src/App.js

import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText title text="Task Management and Motivation App" />
      </header>
      <main>
        <TaskGenerator />
      </main>
      <footer>
        <p>© 2024 KrisISM</p>
      </footer>
    </div>
  );
};

export default App;

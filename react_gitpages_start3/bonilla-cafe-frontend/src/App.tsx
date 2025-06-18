import React from 'react';
import DessertMenu from './components/DessertMenu';
import DesignElements from './components/DesignElements';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <DesignElements />
      <h1>Welcome to Bonilla Café</h1>
      <DessertMenu />
    </div>
  );
};

export default App;
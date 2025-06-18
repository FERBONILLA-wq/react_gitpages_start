import React from 'react';
import DessertMenu from './components/DessertMenu';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Bonilla Café</h1>
      <h2>Our Dessert Menu</h2>
      <DessertMenu />
    </div>
  );
};

export default App;
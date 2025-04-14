import React from 'react';
import './App.css';
import PokemonGrid from './Components/PokemonGrid';
import Header from './Components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <PokemonGrid />
      </div>
    </div>
  );
}

export default App;

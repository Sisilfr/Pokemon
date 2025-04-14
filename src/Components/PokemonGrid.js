import React, { useState } from 'react';
import './PokemonGrid.css';
import PokemonCard from './PokemonCard';


const PokemonGrid = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('id');

  // Bulbasaur and Kabuto data
  const featuredPokemon = { 
    id: 1, 
    name: 'Bulbasaur', 
    type: 'Grass', 
    number: '#1001', 
    image: 'Bulbasaur.png' 
  };
  
  const regularPokemonData = [
    { id: 2, name: 'Kabuto', type: 'Rock', number: '#1002', image: 'kabuto.png' },
    { id: 3, name: 'Bulbasaur', type: 'Grass', number: '#1001', image: 'Bulbasaur.png' },
    { id: 4, name: 'Kabuto', type: 'Rock', number: '#1002', image: 'kabuto.png' },
    { id: 5, name: 'Bulbasaur', type: 'Grass', number: '#1001', image: 'Bulbasaur.png' },
    { id: 6, name: 'Kabuto', type: 'Rock', number: '#1002', image: 'kabuto.png' },
{ id: 7, name: 'Bulbasaur', type: 'Grass', number: '#1001', image: 'Bulbasaur.png' }, 
];

  // Fungsi untuk mengurutkan Pokemon berdasarkan kriteria
  const sortPokemon = (data, criteria) => {
    switch (criteria) {
      case 'name':
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      case 'type':
        return [...data].sort((a, b) => a.type.localeCompare(b.type));
      case 'id':
      default:
        return [...data].sort((a, b) => a.id - b.id);
    }
  };

  const sortedPokemonData = sortPokemon(regularPokemonData, sortBy);

  return (
    <div className="pokemon-browser">
      <div className="controls">
        <div className="sort-dropdown">
          <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">Sort by ID</option>
            <option value="name">Sort by Name</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>
        <div className="view-toggle">
          <button
            className={`view-button ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            ☰
          </button>
          <button
            className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            ⋮⋮
          </button>
        </div>
      </div>

      {/* Featured Bulbasaur Card (larger and centered) */}
      <div className="featured-pokemon-container">
        <div className="featured-pokemon-card">
          <img 
            src={featuredPokemon.image} 
            alt={featuredPokemon.name}
            className="featured-pokemon-image"
          />
          <div className="featured-pokemon-info">
            <span className={`pokemon-type type-${featuredPokemon.type.toLowerCase()}`}>
              {featuredPokemon.type}
            </span>
            <h2 className="featured-pokemon-name">{featuredPokemon.name}</h2>
            <p className="featured-pokemon-number">{featuredPokemon.number}</p>
          </div>
        </div>
      </div>

      {/* Regular Kabuto Cards below */}
      <div className={`pokemon-container ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
        {sortedPokemonData.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            number={pokemon.number}
            image={pokemon.image}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonGrid;
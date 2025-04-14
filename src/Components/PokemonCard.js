import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ ID, name, type, number, image, viewMode }) => {
  return (
    <div className={`pokemon-card ${viewMode === 'list' ? 'list-mode' : ''}`}>
      <div className="pokemon-image">
        <img src={image} alt={name} />
      </div>
      <div className="pokemon-info">
        <div className="pokemon-type">{type}</div>
        <div className="pokemon-number">{number}</div>
        <h3 className="pokemon-name">{name}</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
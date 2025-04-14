import React from 'react';
import './PokemonDetail.css';

const PokemonDetail = ({ pokemon, onClose }) => {
  if (!pokemon) return null;
  
  const { name, type, secondaryType, number, image, hp, attack, defense, speed } = pokemon;
  
  const getTypeColor = (type) => {
    const typeColors = {
      'Grass': '#78C850',
      'Poison': '#A040A0',
      'Fire': '#F08030',
      'Water': '#6890F0',
      'Bug': '#A8B820',
      'Flying': '#A890F0',
      'Normal': '#A8A878',
      'Electric': '#F8D030',
      'Ground': '#E0C068',
      'Rock': '#B8A038',
      'Psychic': '#F85888',
      'Ice': '#98D8D8',
      'Dragon': '#7038F8',
      'Ghost': '#705898',
      'Dark': '#705848',
      'Steel': '#B8B8D0',
      'Fairy': '#EE99AC'
    };
    return typeColors[type] || '#68A090';
  };

  return (
    <div className="pokemon-detail-overlay">
      <div className="pokemon-detail-card">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="detail-header">
          <div className="detail-number">{number}</div>
          <h2 className="detail-name">{name}</h2>
          <div className="detail-types">
            <span className="detail-type" style={{ backgroundColor: getTypeColor(type) }}>{type}</span>
            {secondaryType && (
              <span className="detail-type" style={{ backgroundColor: getTypeColor(secondaryType) }}>{secondaryType}</span>
            )}
          </div>
        </div>
        
        <div className="detail-image-container">
          <img src={image || `/api/placeholder/300/300?text=${name}`} alt={name} className="detail-image" />
        </div>
        
        <div className="detail-stats">
          <div className="detail-stat">
            <span className="detail-stat-label">HP</span>
            <div className="stat-bar-container">
              <div className="stat-bar" style={{ width: `${hp/255*100}%` }}></div>
            </div>
            <span className="detail-stat-value">{hp}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Attack</span>
            <div className="stat-bar-container">
              <div className="stat-bar" style={{ width: `${attack/255*100}%` }}></div>
            </div>
            <span className="detail-stat-value">{attack}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Defense</span>
            <div className="stat-bar-container">
              <div className="stat-bar" style={{ width: `${defense/255*100}%` }}></div>
            </div>
            <span className="detail-stat-value">{defense}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Speed</span>
            <div className="stat-bar-container">
              <div className="stat-bar" style={{ width: `${speed/255*100}%` }}></div>
            </div>
            <span className="detail-stat-value">{speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
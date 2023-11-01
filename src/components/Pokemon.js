import React, { useState } from 'react';


const Pokemon = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);

  const handleRandomPokemon = () => {

    // Generate a random number between 1 and 898 (total number of Pokémon in the API)
    const randomId = Math.floor(Math.random() * 898) + 1;

    // Make the API call to get the random Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched Pokémon data
        setRandomPokemon(data);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
      });
  };

  return (
    <div className='contact night-mode-available text'>
      <h1>Pokemon</h1>
      <h3>Find out what pokemon you receive randomly!</h3>
      <button onClick={handleRandomPokemon}>Random</button>
      {randomPokemon && (
        <div>
          <h1>{randomPokemon.name}</h1>
          <img src={randomPokemon.sprites.front_default} alt={randomPokemon.name} style={{width: 300, height: 300}} />

        </div>
      )}
    </div>
  );
};

export default Pokemon;
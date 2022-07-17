import React, { useState } from 'react'
import './filter.css'

function Filter( pokemon, setPokemon ) {

  console.log(pokemon);

  const sortPokemons = () => {
      setPokemon([...pokemon].sort((a, b) => a.localeCompare(b) ))
  }

  return (
    <div>
        <div class="sort">
            <h2 class="mb-20">Сортировать по:</h2>
            <div class="sort-items">
                <p onClick={sortPokemons}>Популярности</p>
                <p>Рейтингу</p>
                <p>Уровню силы</p>
            </div>
        </div>
    </div>
  )
}

export default Filter
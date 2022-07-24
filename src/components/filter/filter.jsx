import { useState } from 'react';
import './filter.css';


function Filter( {pokemon, setPokemon } ) {

  const [order, setOrder] = useState("ASC")


  const sortPokemons = (col) => {
      if(order === "ASC") {
        const sorted = [...pokemon].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setPokemon(sorted)
        setOrder("DSC")


        if(order === "DSC") {
          const sorted = [...pokemon].sort((a, b) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
          );
          setPokemon(sorted)
          setOrder("ASC")
      }
  }}

  return (
    <div>
        <div class="sort">
            <h2 class="mb-20">Сортировать по:</h2>
            <div class="sort-items">
                <p onClick={() => sortPokemons("name")}>Популярности</p>
                <p>Рейтингу</p>
                <p>Уровню силы</p>
            </div>
        </div>
    </div>
  )
}

export default Filter;
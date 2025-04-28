import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function  Home(){
  const [pokemons, setPokemons] = useState([]); 
  const [filteredPokemons, setFilteredPokemon] = useState([])

const PokemonTypes = [
  "All",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "rock",
  "ground",
  "flying",
  "bug",
  "normal",
];


  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonList = [];
      try{
        console.log('Fetching');
        for (let i = 1; i <= 50; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await res.json();
        pokemonList.push({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((t) => t.type.name),
        });
      }
      console.log("fetchin end");
      setPokemons(pokemonList); 
      setFilteredPokemon(pokemonList);
      }
      catch(err){
        console.log('Error while feting pokemon' , err);
      }
      
    };

    fetchPokemons();
  }, []);

  const handleSearch = (e) => {

    let searchTerm = e.target.value;
    const filter = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filter)
  };

  function categoryFilter(e){
    const Ctype = e.target.innerText.toLowerCase();
    if(Ctype === "all"){
      setFilteredPokemon(pokemons)
    }
    else{
      const categoryFiltered = pokemons.filter((pokemon) =>
        pokemon.types.some((type) => type.includes(Ctype))
      );
      setFilteredPokemon(categoryFiltered);
    }
  }
  
 

  return (
    <div className="text-center" style={{ padding: "2rem" }}>
      <input
        className="border-2 rounded-xl"
        type="text"
        placeholder="Search Pokémon"
        onChange={handleSearch}
        style={{ padding: "0.5rem", marginBottom: "1rem", width: "300px" }}
      />
      <div className="type-container flex flex-wrap justify-center mb-4 gap-4">
        {PokemonTypes.map((type, index) => (
          <div
            key={index}
            onClick={(e) => categoryFilter(e)}
            className="w-24 h-12 flex justify-center items-center text-lg capitalize font-bold text-white cursor-pointer rounded-md bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          >
            {type}
          </div>
        ))}
      </div>

      <h1 className="text-2xl">Pokémon List</h1>

      <div
        className="ml-10 justify-center"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p className="text-3xl mt-10 text-red-600">Searching.....</p>
        )}
      </div>
    </div>
  );
};

export default Home;

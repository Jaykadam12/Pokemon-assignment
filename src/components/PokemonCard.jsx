import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center w-60 m-4 hover:scale-105 transition-transform duration-300">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto mb-4"
      />
      <h3 className="text-xl font-bold capitalize mb-2">{pokemon.name}</h3>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">ID:</span> {pokemon.id}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Type:</span> {pokemon.types.join(", ")}
      </p>
    </div>
  );
};

export default PokemonCard;

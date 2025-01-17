import React, { Suspense, lazy } from "react";
import { useGetPokemonListQuery } from "../store/pokemonApi";
import { Pokemon } from "../types";

const PokeItem = lazy(() => import("./PokeItem"));

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div className="only-text">Loading...</div>;
  if (error) return <div className="only-text">Error loading Pokémon</div>;

  const { results } = data || { results: [] };

  return (
    <div className="poke-list-wrapper">
      {results.length > 0 ? (
        <ul>
          <Suspense fallback={<div>Loading Pokémon items...</div>}>
            {results.map((pokemon: Pokemon) => (
              <PokeItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </Suspense>
        </ul>
      ) : (
        <div className="only-text">No Pokémon available</div>
      )}
    </div>
  );
};

export default PokemonList;

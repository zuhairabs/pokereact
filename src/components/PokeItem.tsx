import { useNavigate } from "react-router-dom";
import { Pokemon } from "../types";
import { useGetPokemonDetailQuery } from "../store/pokemonApi";
import { useExtractColors } from "react-extract-colors";
import PokeBall from "../assets/pokeball.png";

interface PokeItemProps {
  pokemon: Pokemon;
}

const PokeItem: React.FC<PokeItemProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const { data: { sprites } = {}, isLoading } = useGetPokemonDetailQuery(
    pokemon.name
  );
  const image = sprites?.front_default;

  const { darkerColor, lighterColor } = useExtractColors(image || "");

  const goToPoke = (name: string) => {
    navigate(`/pokemon/${name}`);
  };
  return (
    <li
      className="poke-item"
      key={pokemon.name}
      onClick={() => goToPoke(pokemon.name)}
      style={{
        boxShadow: `0 4px 10px ${darkerColor}, 0 1px 10px ${lighterColor}`,
      }}
    >
      {isLoading ? (
        <img width="20px" height="20px" src={PokeBall} alt="pokeball" />
      ) : (
        <img
          src={image}
          alt={pokemon.name}
          aria-label={pokemon.name}
          loading="lazy"
        />
      )}
      <p>{pokemon.name}</p>
    </li>
  );
};

export default PokeItem;

import PokemonSvg from "../assets/pokemon.svg";

const PikachuCorner: React.FC = () => {
  return (
    <div className="pikachu-corner-pop">
      <p>Pikachu!</p>
      <img src={PokemonSvg} alt="pokemon" />
    </div>
  );
};

export default PikachuCorner;

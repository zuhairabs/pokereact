import PokemonSvg from "../assets/poke-symbol.png";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <img className="poke-symbol" src={PokemonSvg} alt="symbol" />
      <img className="logo" src={PokemonSvg} alt="logo" />
      <h1>POKEREACT</h1>
    </div>
  );
};

export default Navbar;

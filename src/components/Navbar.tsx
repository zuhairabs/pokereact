import { Link } from "react-router-dom";
import PokemonSvg from "../assets/poke-symbol.png";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <img className="poke-symbol" src={PokemonSvg} alt="symbol" />
      <img className="logo" src={PokemonSvg} alt="logo" />
      <Link to="/">
        <h1>POKEREACT</h1>
      </Link>
    </div>
  );
};

export default Navbar;

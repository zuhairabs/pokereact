import PokemonSvg from "../assets/poke-symbol.png";

const ErrorPage: React.FC = () => {
  return (
    <div className="error-page-wrapper">
      <img src={PokemonSvg} alt="pokemon" />
      <h1>Page Not Found</h1>
      <p>The page you're looking for is not found</p>
    </div>
  );
};

export default ErrorPage;

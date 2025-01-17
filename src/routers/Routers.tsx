import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PokemonDetail from "../components/PokemonDetail";
import ErrorPage from "../components/ErrorPage";

const Routers: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default Routers;

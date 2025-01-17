import Routers from "./routers/Routers";
import "./App.css";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="noise" />
      <Routers />
      <Footer />
    </div>
  );
};

export default App;

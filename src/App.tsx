import Routers from "./routers/Routers";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="noise" />
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
};

export default App;

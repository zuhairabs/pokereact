import IhLogo from "../assets/ih-logo.png";
import PikachuCorner from "./PikachuCorner";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>
        Made with ❤️ by{" "}
        <a href="https://linkedin.com/in/zuhairabs" target="_blank">
          Zuhair Abbas
        </a>{" "}
        for
      </p>
      <img className="ih-logo" src={IhLogo} alt="logo" />
      <PikachuCorner />
    </div>
  );
};

export default Footer;

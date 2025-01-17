import { Link } from "react-router-dom";

interface BreadcrumbProps {
  name: string;
}

const Breadcrumb = ({ name }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <p className="parent">
        <Link to="/">Pokemons</Link>
      </p>
      <p>›</p>
      <p className="current">{name}</p>
    </div>
  );
};

export default Breadcrumb;

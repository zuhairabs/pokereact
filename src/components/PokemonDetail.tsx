import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonDetailQuery } from "../store/pokemonApi";
import { useExtractColors } from "react-extract-colors";
import Breadcrumb from "./Breadcrumb";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, error, isLoading } = useGetPokemonDetailQuery(name || "");
  const { darkerColor, lighterColor } = useExtractColors(
    data?.sprites?.front_default || ""
  );

  if (isLoading) return <div className="only-text">Loading...</div>;
  if (error) return <div className="only-text">Error loading details</div>;
  if (!data) return <div className="only-text">Pokemon not found</div>;

  return (
    <div className="poke-details-page">
      <Breadcrumb name={data?.name} />
      <img
        loading="lazy"
        style={{
          filter: `drop-shadow(0 0 100px ${darkerColor}) drop-shadow(0 0 100px ${lighterColor}) drop-shadow(6px 6px 0 white)`,
        }}
        src={data?.sprites?.front_default}
        alt={data?.name}
      />
      <h1>{data?.name}</h1>
      <div className="grid">
        <p>Height:</p>
        <p>{data?.height}</p>
        <p>Weight:</p>
        <p>{data?.weight}</p>
        <p>Types:</p>
        <div className="pill-wrapper">
          {data?.types?.map((t) => (
            <p
              key={t.type.name}
              style={{
                background: `${darkerColor}`,
              }}
              className="pill"
            >
              {t.type.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;

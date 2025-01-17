import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PokemonDetail, PokemonListResult } from "../types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResult, void>({
      query: () => "pokemon/",
    }),
    getPokemonDetail: builder.query<PokemonDetail, string>({
      query: (name) => `pokemon/${name}/`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = pokemonApi;

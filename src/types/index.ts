export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResult {
  results: Pokemon[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: string;
  weight: string;
  sprites: {
    front_default : string
  }
  types: {
    type: {
      name: string
    }
  }[]
}

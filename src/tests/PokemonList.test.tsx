import { render, screen, waitFor } from "@testing-library/react";
import {
  useGetPokemonDetailQuery,
  useGetPokemonListQuery,
} from "../store/pokemonApi";
import PokemonList from "../components/PokemonList";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";

// Mock the pokemonApi
vi.mock("../store/pokemonApi");

describe("PokemonList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state", () => {
    (useGetPokemonListQuery as vi.Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    render(<PokemonList />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useGetPokemonListQuery as vi.Mock).mockReturnValue({
      isLoading: false,
      error: true,
      data: null,
    });

    render(<PokemonList />);
    expect(screen.getByText(/Error loading Pokémon/i)).toBeInTheDocument();
  });

  it("renders no Pokémon available", () => {
    (useGetPokemonListQuery as vi.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: { results: [] },
    });

    render(<PokemonList />);
    expect(screen.getByText(/No Pokémon available/i)).toBeInTheDocument();
  });

  it("renders a list of Pokémon", async () => {
    interface PokemonDetail {
      data: { sprites: { front_default: string } };
      isLoading: boolean;
    }
    const mockListData = {
      results: [{ name: "Pikachu" }, { name: "Charmander" }],
    };
    const details: { [key: string]: PokemonDetail } = {
      Pikachu: {
        data: { sprites: { front_default: "pikachu.png" } },
        isLoading: false,
      },
      Charmander: {
        data: { sprites: { front_default: "charmander.png" } },
        isLoading: false,
      },
    };
    (useGetPokemonListQuery as vi.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockListData,
    });
    (useGetPokemonDetailQuery as vi.Mock).mockImplementation((name: string) => {
      return details[name] || { data: null, isLoading: true };
    });
    render(
      <Router>
        <PokemonList />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
      expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
    });
  });
});

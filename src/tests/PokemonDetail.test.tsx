import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import PokemonDetail from "../components/PokemonDetail";
import { useGetPokemonDetailQuery } from "../store/pokemonApi";
import { describe, expect, it, vi, beforeEach } from "vitest";

// Mock the pokemonApi
vi.mock("../store/pokemonApi");

describe("PokemonDetail", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state", () => {
    (useGetPokemonDetailQuery as vi.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(
      <MemoryRouter initialEntries={["/pokemon/pikachu"]}>
        <Routes>
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useGetPokemonDetailQuery as vi.Mock).mockReturnValue({
      data: null,
      error: true,
      isLoading: false,
    });

    render(
      <MemoryRouter initialEntries={["/pokemon/pikachu"]}>
        <Routes>
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Error loading details/i)).toBeInTheDocument();
  });

  it("renders pokemon details", async () => {
    (useGetPokemonDetailQuery as vi.Mock).mockReturnValue({
      data: {
        name: "Pikachu",
        height: 4,
        weight: 60,
        sprites: { front_default: "pikachu.png" },
        types: [{ type: { name: "Electric" } }],
      },
      error: null,
      isLoading: false,
    });

    render(
      <MemoryRouter initialEntries={["/pokemon/pikachu"]}>
        <Routes>
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => {
      const pikachuElements = screen.getAllByText(/Pikachu/i);
      pikachuElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
      expect(screen.getByText(/Height:/i)).toBeInTheDocument();
      expect(screen.getByText(/4/i)).toBeInTheDocument();
      expect(screen.getByText(/Weight:/i)).toBeInTheDocument();
      expect(screen.getByText(/60/i)).toBeInTheDocument();
      expect(screen.getByText(/Types:/i)).toBeInTheDocument();
      expect(screen.getByText(/Electric/i)).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import App from "../App";
import ErrorPage from "../components/ErrorPage";

// Mock the pokemonApi
vi.mock("../store/pokemonApi", () => ({
  useGetPokemonListQuery: () => ({
    data: { results: [] },
    error: null,
    isLoading: false,
  }),
}));

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the Navbar, Routers, and Footer components", () => {
    expect(screen.getByText("POKEREACT")).toBeInTheDocument();
  });
});

describe("Error Component", () => {
  beforeEach(() => {
    render(<ErrorPage />);
  });

  it("renders the error component correctly", () => {
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });
});

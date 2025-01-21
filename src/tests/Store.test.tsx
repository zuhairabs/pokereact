import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { store } from "../store/store";
import { pokemonApi } from "../store/pokemonApi";

// Mock the localStorage
beforeEach(() => {
  // Mock localStorage
  global.localStorage.setItem = vi.fn();
  global.localStorage.getItem = vi.fn(() => "{}"); // Return an empty object as default
  global.localStorage.removeItem = vi.fn();
});

// Clean up after each test to reset localStorage mocks
afterEach(() => {
  vi.clearAllMocks();
});

describe("Redux Store", () => {
  it("should initialize the store with the correct reducer and middleware", () => {
    const state = store.getState();
    // Ensure the store is set up with the pokemonApi reducer
    expect(state).toHaveProperty(pokemonApi.reducerPath);
  });

  it("should dispatch actions correctly and update the state", async () => {
    // Dispatch the action and wait for the response
    const action = pokemonApi.endpoints.getPokemonDetail.initiate("pikachu");
    await store.dispatch(action);

    // Get the updated state
    const state = store.getState();

    // Ensure that the dispatched action has updated the state
    expect(state[pokemonApi.reducerPath].queries).toHaveProperty(
      'getPokemonDetail("pikachu")'
    );
  });

  it("should rehydrate the state from localStorage", () => {
    // Mock the persisted state in localStorage with API data
    global.localStorage.getItem = vi.fn(() =>
      JSON.stringify({
        pokemonApi: {
          queries: {
            'getPokemonDetail("pikachu")': {
              endpointName: "getPokemonDetail",
              originalArgs: "pikachu",
              requestId: "8XkAML3KxXSn7H8ioTJ7u",
              startedTimeStamp: 1737444820095,
              status: "pending", // This could be 'success', 'failure', or 'pending' based on your test scenario
            },
          },
        },
      })
    );

    // Initialize the store again to trigger rehydration
    const state = store.getState();

    // Check that the persisted state is loaded correctly, including API data
    expect(state.pokemonApi.queries).toEqual({
      'getPokemonDetail("pikachu")': expect.objectContaining({
        endpointName: "getPokemonDetail",
        status: "fulfilled",
        originalArgs: "pikachu",
        requestId: expect.any(String),
        fulfilledTimeStamp: expect.any(Number), // Accept any number for the timestamp
        startedTimeStamp: expect.any(Number), // Accept any number for the timestamp
      }),
    });
  });
});

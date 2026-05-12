import "@testing-library/jest-dom";

process.env.NEXT_PUBLIC_API_URL = "https://pokeapi.co/api/v2";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  get: jest.fn(),
}));

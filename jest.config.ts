import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  coverageProvider: "v8",
  testMatch: ["**/*.spec.{ts,tsx}"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.spec.{ts,tsx}",
    "!**/*.stories.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!jest.config.ts",
    "!jest.setup.ts",
    "!next.config.ts",
  ],
};

export default createJestConfig(config);

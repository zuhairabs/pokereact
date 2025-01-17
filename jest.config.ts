module.exports = {
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts, tsx}"],
  testRegex: "(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

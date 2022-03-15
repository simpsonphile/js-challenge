import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  roots: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    '<rootDir>/tests/mocks.js'
  ],
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/cypress/'
  ],

}

export default config;

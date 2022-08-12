import { compilerOptions } from "./tsconfig.json"
import { pathsToModuleNameMapper } from "ts-jest"

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",
  // The test environment that will be used for testing
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  // A set of global variables that need to be available in all test environments
  globals: {
    "ts-jst": {
      useESM: true,
    },
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
  // Indicates whether each individual test should be reported during the run
  verbose: true,
}

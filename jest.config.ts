/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
})

const config: Config = {
    // automock: false,
    bail: 3,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        './components/**/*.{js,jsx,ts,tsx}',
        './lib/**/*.{js,jsx,ts,tsx}',
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: ['json', 'text', 'lcov', 'clover', 'json-summary'],
    // globalSetup: undefined,
    // globalTeardown: undefined,
    // globals: {},
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    modulePathIgnorePatterns: ['<rootDir>/components/ui/'],
    // roots: [
    //   "<rootDir>"
    // ],
    // setupFiles: [],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
}

export default createJestConfig(config)

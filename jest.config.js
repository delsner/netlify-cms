module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/setupTestFramework.js',
    '@undefinedlabs/scope-agent/jest/setupTests',
  ],
  moduleNameMapper: {
    'netlify-cms-lib-auth': '<rootDir>/packages/netlify-cms-lib-auth/src/index.js',
    'netlify-cms-lib-util': '<rootDir>/packages/netlify-cms-lib-util/src/index.ts',
    'netlify-cms-ui-default': '<rootDir>/packages/netlify-cms-ui-default/src/index.js',
    'netlify-cms-backend-github': '<rootDir>/packages/netlify-cms-backend-github/src/index.ts',
  },
  collectCoverage: true,
  forceCoverageMatch: ['**/*.test.js', '**/*.spec.js'],
  testURL: 'http://localhost:8080',
  testRunner: '@undefinedlabs/scope-agent/jest/testRunner',
  globalSetup: '@undefinedlabs/scope-agent/jest/globalSetup',
};

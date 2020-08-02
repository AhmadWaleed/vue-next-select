// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['dist/vue-select.es.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  errorOnDeprecated: true,
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
}

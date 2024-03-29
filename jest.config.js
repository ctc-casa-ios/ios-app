/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    //'^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  moduleDirectories: ['node_modules', 'utils'],
  setupFiles: ['./utils/asyncStorageMock.js'],
};

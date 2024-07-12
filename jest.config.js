module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform .js and .jsx files using babel-jest
    '^.+\\.mjs$': 'babel-jest', // Transform .mjs files using babel-jest
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs'], // Recognize .js, .jsx, and .mjs file extensions
  testEnvironment: 'node', // Specify the test environment (default is jsdom)
};

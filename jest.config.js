module.exports = {
  testURL: 'http://localhost/',
  moduleNameMapper: {
    //when match regex, import given file instead of the original file
    '\\.css$': require.resolve('./test/style-mock')
  },
  collectCoverageFrom: ['**/src/**/*.js']
};

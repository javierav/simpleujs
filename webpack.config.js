const path = require('path');

module.exports = (env) => {
  const outputFilename = env && env.production === true
    ? 'simpleujs.js'
    : 'simpleujs.dev.js'
  ;

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: outputFilename,
      library: 'simpleujs',
      libraryTarget: 'umd'
    }
  };
};

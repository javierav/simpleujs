const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'simpleujs',
    libraryTarget: 'umd'
  }
};

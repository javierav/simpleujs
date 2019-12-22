const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const package = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');

const banner = `
  ${package.name} v${package.version} - ${package.description}

  ${package.repository}

  Copyright (c) 2019 ${package.author.name} - Released under ${package.license} license.
`;

const common = {
  mode: 'none',
  devtool: 'none',
  entry: {
    "simpleujs": "./src/simpleujs.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'simpleujs',
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: banner,
      entryOnly: true
    })
  ]
};


//
// UMD for browser
//
const umdVersion = merge(common, {
  output: {
    filename: 'simpleujs.js',
    libraryTarget: 'umd'
  }
});

//
// UMD for browser (minified version)
//
const umdMinifiedVersion = merge(common, {
  output: {
    filename: 'simpleujs.min.js',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false
    })]
  }
});

//
// CommonJS2 for builders
//
const commonjs2Version = merge(common, {
  output: {
    filename: 'simpleujs.common.js',
    libraryTarget: 'commonjs2'
  }
});

//
// Development
//
const developmentVersion = merge(common, {
  devtool: 'inline-source-map',
  output: {
    filename: 'simpleujs.dev.js',
    libraryTarget: 'umd'
  }
});

module.exports = [
  umdVersion,
  umdMinifiedVersion,
  commonjs2Version,
  developmentVersion
];

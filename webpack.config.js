const path = require('path');

const config = {
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vanilla-sharing.js',
    library: 'VanillaSharing',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }],
  },
};

module.exports = config;

var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src/client/app'),
  build: path.join(__dirname, 'public')
};

module.exports = {
  entry: [
        path.join(__dirname, 'src/client/app/bootstrap.jsx')
  ],

  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',

  output: {
    path: PATHS.build,
    filename: 'bundle.js'

  },
  module: {
    loaders: [{
      test: [/\.jsx?$/, /\.js$/],
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  node: {
    __dirname: true
  }
};

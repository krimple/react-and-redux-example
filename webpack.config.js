var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src/client/app'),
  build: path.join(__dirname, 'public')
};

module.exports = {
  entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/client/app/bootstrap.jsx')
  ],

  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',

  output: {
    path: PATHS.build,
    filename: 'bundle.js'

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: [/\.jsx?$/, /\.js$/], loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src/client/app')}
    ]
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

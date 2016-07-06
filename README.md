This is a (simple??) example using React, the React Router and Redux together.

For hot reload
* Had to install react-hot-loader, weback-dev-server, and configure webpack to use the hot loader:
```javascript
// added this plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

... 

//// THE TWO FRONT Entries are new...
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
      // CONVERTED TO THIS TYPE OF LOADER CONFIG
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

```


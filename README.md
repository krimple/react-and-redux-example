
Odd things

* I had to add react-redux to get the context into React from the Redux, otherwise I had to 
  manually pass the store either into state or into props, and manage it. Or I could have then
  further tried to use Context.
* Once I configured the Router, all bets on the redux API were off - and I had to manually install 
  History `history` v2.1.0 as the released history API was for Router 3.0.
* I'm using react-router-redux now to try to make the router provide the store data like the react-redux integration
  did before.  Not working at the moment.
  
For the overall project
* I had to install several packages - exists-sync, object-assign, minimatch, walk-sync and through. NO IDEA why, except 
  when I tried to run after configuring react-redux I could not run webpack-dev-server.
* Added ES 7 back into the mix via following http://technologyadvice.github.io/es7-decorators-babel6/  

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


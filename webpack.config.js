var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/js/'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
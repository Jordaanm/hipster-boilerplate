var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/client/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
        chunkFilename: "[id].js",
		publicPath: '/assets/'
	},
	plugins: [
		new ExtractTextPlugin('styles.css', {allChunks: true})
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'source-map'
			}
		],
		loaders: [
			{
				test: /\.less$/, include: path.join(__dirname, '/src/styles'), loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			},
			{
				test: /\.js$/,
				loaders: [ 'babel' ],
				exclude: /node_modules/,
				include: __dirname
			}
		]
	}
}
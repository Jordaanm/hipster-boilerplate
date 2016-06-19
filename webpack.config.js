var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var isDev = process.env.NODE_ENV === 'development';

var envPlugin;
if(isDev) {
	envPlugin = {
		'process.env': {
			'NODE_ENV': '"development"'
		},
		__DEV__: 'true'
	};
}
else {
	envPlugin = {
		'process.env': {
			'NODE_ENV': '"production"'
		},
		__DEV__: 'false'
	};
}


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
		new ExtractTextPlugin('styles.css', {allChunks: true}),
		new webpack.DefinePlugin(envPlugin)
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
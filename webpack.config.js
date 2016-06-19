var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var isDev = process.env.NODE_ENV === 'development';

var envPlugin;
var plugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
	new ExtractTextPlugin('styles.css', {allChunks: true}),
];

if(isDev) {
	envPlugin = {
		'process.env': {
			'NODE_ENV': '"development"'
		},
		__DEV__: 'true'
	};

	plugins = plugins.concat([
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin(envPlugin)
	]);

}
else {
	envPlugin = {
		'process.env': {
			'NODE_ENV': '"production"'
		},
		__DEV__: 'false'
	};

	plugins = plugins.concat([
		new webpack.DefinePlugin(envPlugin)
	]);

}


module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/client/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
        chunkFilename: "[id].js",
		publicPath: '/assets/'
	},
	plugins: plugins,
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
				loader: 'babel',
				exclude: /node_modules/,
				include: __dirname,
				query: {
					"env": {
						"development": {
							"plugins": [
								["react-transform", {
									"transforms": [{
										"transform": "react-transform-hmr",
										"imports": ["react"],
										"locals": ["module"]
									}]
								}]
							]
						}
					}					
				}
			}
		]
	}
}
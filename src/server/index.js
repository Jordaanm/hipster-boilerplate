import express from "express";
import path from 'path';
import webpack from 'webpack';


let webpackConfig = require('../../webpack.config');
let compiler = webpack(webpackConfig);

import reactApp from './app';
// Register feature flags
global.__DEV__ = ('development' === process.env.NODE_ENV);

//Express App
let app = express();


if(__DEV__){
	let webpackHotMiddleware = require('webpack-hot-middleware');
	let webpackDevMiddleware = require('webpack-dev-middleware');
	
	let serverOptions = {
		noInfo: true,
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		stats: {colors: true}
	};

	app.use(webpackDevMiddleware(compiler, serverOptions));
	app.use(webpackHotMiddleware(compiler, {
		log: console.log
	}));

}
else{
	//Serve static assets from the build output folder
	let staticPath = path.join(__dirname, '../../dist');
	app.use('/assets', express.static(staticPath));	
}

//Handle root requests
app.use("/", reactApp);


app.listen(3000, function() {
	console.log("Example app listening on port 3000");
});
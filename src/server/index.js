import express from "express";
import path from 'path';
import reactApp from './app';
// Register feature flags
global.__DEV__ = ('development' === process.env.NODE_ENV);

//Express App
let app = express();

//Serve static assets from the build output folder
let staticPath = path.join(__dirname, '../../dist');
app.use('/assets', express.static(staticPath));

//Handle root requests
app.get("*", reactApp);


app.listen(3000, function() {
	console.log("Example app listening on port 3000");
});
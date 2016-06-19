import express from "express";
import path from 'path';
let app = express();

//Serve static assets from the build output folder
let staticPath = path.join(__dirname, '/dist');
app.use('/assets', express.static(staticPath));

//Handle root requests
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, 'src/index.html'));
});


app.listen(3000, function() {
	console.log("Example app listening on port 3000");
});
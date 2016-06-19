'use strict';

import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory, match } from 'react-router';
import createStore from '../common/store';
import getRoutes from '../common/routes';
import rootComponent from '../common/rootComponent';

let template = fs.readFileSync(path.join(__dirname, "index.html"), 'utf8');

const renderHtml = function (preRendered, initialState) {
	return template.toString()
		.replace('<!-- prerendered -->', preRendered)
		.replace('<!-- initialState -->', JSON.stringify(initialState))
		.replace('<!-- title -->', 'My Boilerplate');
};


const getInitialState = function(){
	return {
		value: 123
	};
};

export default function renderApp(req, res) {
	const initialState = getInitialState();
	const history = createMemoryHistory(req.originalUrl);
	const store = createStore(initialState);
	const state = store.getState();
	const html = ReactDOMServer.renderToString(rootComponent(store, history));

	match({ history, routes: getRoutes(store), location: req.originalUrl }, function(error, redirectLocation, renderProps){

		if(redirectLocation) {
			res.redirect(redirectLocation.pathName + redirectLocation.search);
		} else if (error) {
			res.status(500).send(renderHtml(html, state));	
		} else if (renderProps) {
			res.status(200).send(renderHtml(html, state));
		} else {
			res.status(404).send('Not Found');
		}


	});
}
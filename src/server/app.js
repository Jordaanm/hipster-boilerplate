'use strict';

import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import createStore from '../common/store';
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
	let initialState = getInitialState();
	const store = createStore(initialState);
	const state = store.getState();
	const html = ReactDOMServer.renderToString(rootComponent(store));

	res.status(200).send(renderHtml(html, state));
}
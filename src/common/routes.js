import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import App from './containers/App';
import Home from './containers/Home';
import NotFound from './components/NotFound';

export default function(store){
	return (
		<Route path="/" component="App">
			<IndexRoute component={Home}/>
			<Route path="*" component={NotFound} status={404} />
		</Route>
	);
}
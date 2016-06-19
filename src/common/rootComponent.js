import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import getAppRoutes from './routes';
import DevTools from './containers/DevTools';


export default function(store, history){
	
	// Create an enhanced history that syncs navigation events with the store
	const appHistory = syncHistoryWithStore(history, store);
	
	//Build the app router
	let AppRoutes = getAppRoutes(store);

	return (
		<Provider store={store}>
			<div>
				<Router history={history}>
					{ AppRoutes }
				</Router>
				{ __DEV__ && <DevTools store={store} /> }
			</div>
		</Provider>
	);
}
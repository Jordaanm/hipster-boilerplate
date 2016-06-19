import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import DevTools from './containers/DevTools';


function Root({store, history, routes}){
	
	// Create an enhanced history that syncs navigation events with the store
	const appHistory = syncHistoryWithStore(history, store);
	
	//Build the app router
	return (
		<Provider store={store}>
			<div>
				<Router history={appHistory} routes={routes}>
				</Router>
				{ __DEV__ && <DevTools store={store} /> }
			</div>
		</Provider>
	);
}

Root.propTypes = {
	history: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired,
	routes: PropTypes.object.isRequired
};

export default Root;
import React from 'react';
import { Provider } from 'react-redux';
import App from '../common/containers/App';
import DevTools from '../common/containers/DevTools';

export default function(store){
	return (
		<Provider store={store}>
			<div>
				<App />
				{ __DEV__ && <DevTools store={store} /> }
			</div>
		</Provider>
	);
}
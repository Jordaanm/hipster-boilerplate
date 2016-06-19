import { compose, createStore, applyMiddleware } from 'redux';
import reduxLogMiddleware from 'redux-logger';
import DevTools from  './containers/Devtools';

import rootReducer from './reducers';

export default function(initialState) {

	//Default to an unenhanced store
	let enhancer = undefined;

	if (__DEV__) {
		let middleware = [reduxLogMiddleware()];

		enhancer = compose(
			applyMiddleware(...middleware),
			DevTools.instrument()
		);
	}

	let store = createStore(rootReducer, initialState, enhancer);


	if (__DEV__ && module.hot) {
		module.hot.accept('./reducers', () => {
			store.replaceReducer(require('./reducers').default);
		});
	}

	return store;
}
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxLogMiddleware from 'redux-logger';
import DevTools from  './containers/Devtools';

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

	return store;
}
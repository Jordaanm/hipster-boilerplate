import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from '../common/components/Counter';
import counterReducer from '../common/reducers';
import './../styles/app.less';

const store = createStore(counterReducer);
const rootEl = document.getElementById('root');

function render() {
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
			onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
		/>,
		rootEl  
	);
}

render();
store.subscribe(render);

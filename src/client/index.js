import React from 'react';
import ReactDOM from 'react-dom';
import createStore from '../common/store';
import Counter from '../common/components/Counter';
import DevTools from '../common/containers/DevTools';
import './../styles/app.less';

const store = createStore(0);
const rootEl = document.getElementById('root');

function render() {
	ReactDOM.render(
		<div>
			<Counter
				value={store.getState()}
				onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
				onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
			/>
			{ __DEV__ && <DevTools store={store} /> }
		</div>,
		rootEl  
	);
}

render();
store.subscribe(render);

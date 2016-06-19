import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import createStore from '../common/store';
import Root from '../common/root';
import routes from "../common/routes";

let initialState = window.__INITIAL_STATE__ || null;

const store = createStore(initialState);
const rootEl = document.getElementById('root');

ReactDOM.render(<Root store={store} history={browserHistory} routes={routes} />, rootEl);
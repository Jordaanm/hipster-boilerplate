import React from 'react';
import ReactDOM from 'react-dom';
import createStore from '../common/store';
import rootComponent from '../common/rootComponent';

let initialState = window.__INITIAL_STATE__ || null;

const store = createStore(initialState);
const rootEl = document.getElementById('root');

const component = rootComponent(store); 
ReactDOM.render(component, rootEl);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {fetchReducer} from './reducers/fetchReducer'
import logger from 'redux-logger'


export const store = createStore(fetchReducer, applyMiddleware(logger))

console.log('store', store)

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>
, document.getElementById('root'));




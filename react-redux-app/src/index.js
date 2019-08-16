import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {fetchReducer} from './reducers/fetchReducer'


export const store = createStore(fetchReducer)

console.log('store', store)

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>
, document.getElementById('root'));




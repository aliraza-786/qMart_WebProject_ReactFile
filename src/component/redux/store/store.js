import React from 'react';
import { createStore } from 'redux';
import cartReducer from '../reducer/cartReducer';
import { Provider } from 'react-redux';
import combinedReducer from '../reducer/index';


// export const store = createStore( cartReducer );
import {applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    combinedReducer,
    // rootReducer,
    applyMiddleware(thunk)
)


// console.log("This is Store Consloe",store);

export default  store;

import { combineReducers } from 'redux';

import getAllDataReducer from './simpleReducer';
import cartReducer from './cartReducer';

export default combineReducers( {
    getAllDataReducer,
    cartReducer
} );
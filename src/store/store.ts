import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cardPaymentReducer from './reducers';

const reducer = combineReducers({
  cards: cardPaymentReducer,
});

const store = configureStore({ reducer });
export default store;

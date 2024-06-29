// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import auditReducer from './reducers/auditReducer';

const rootReducer = combineReducers({
  audit: auditReducer,
});

const store = createStore(rootReducer);

export default store;

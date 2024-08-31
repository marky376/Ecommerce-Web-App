import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected the import
import productsReducer from '../Reducers/productsReducers';
import categoriesReducer from '../Reducers/categoriesReducers';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Fixed the store creation method

export default store;

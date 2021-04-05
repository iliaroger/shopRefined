import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchProducts } from '../reducers/productsReducer';

// init state
const initState = {};

const reducer = combineReducers({
  productsReducer: fetchProducts,
});
const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

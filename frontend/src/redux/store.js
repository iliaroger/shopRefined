import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchProductsReducer } from '../reducers/productsReducer';
import { registerReducer } from '../reducers/registerReducer';
import { userLoginReducer, manageUserReducer } from '../reducers/loginReducer';
import { notificationsReducer } from '../reducers/notificationsReducer';

// init state
const initState = {};

const reducer = combineReducers({
  productsReducer: fetchProductsReducer,
  registerReducer,
  userLoginReducer,
  manageUserReducer,
  notificationsReducer,
});
const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

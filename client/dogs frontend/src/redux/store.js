import { createStore, applyMiddleware } from 'redux';
import reducerFav from './reducer.js';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  reducerFav,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);

export default store;
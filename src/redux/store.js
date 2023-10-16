// redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favoritesReducer from './reducers/favourite.reducer';
import searchReducer from './reducers/search.reducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

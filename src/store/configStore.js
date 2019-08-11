import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducers/cart';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Store Creating
export default () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
  let persistor = persistStore(store);
  return { store, persistor };
};

import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import rootReducer from './rootReducer';

const persistConfig = {
    key: 'ibbiz',
    storage,
    blacklist: ['management']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware<ThunkMiddleware>(thunk);

const store = createStore(persistedReducer, composeWithDevTools(middleware));

const persistor = persistStore(store);

export { persistor, store };

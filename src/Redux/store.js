import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "./Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const persistConfig = {
  key: "persist-store",
  storage,
  blacklist: ['cart']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };

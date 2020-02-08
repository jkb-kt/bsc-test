import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createRootReducer } from "./reducer";
import sagas from "./sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = createRootReducer(history);

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

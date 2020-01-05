import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancer(applyMiddleware(thunk)));

// const store = createStore(combineReducers, storeEnhancer(applyMiddleware(thunk)));

export default store;

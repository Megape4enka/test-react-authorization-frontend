import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import users from "./modules/users";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ users });

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
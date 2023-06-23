import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducers";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

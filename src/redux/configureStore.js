import { createLogger } from "redux-logger/src";
import { applyMiddleware, combineReducers, createStore } from "redux";
import contacts from "./reducers/contacts";
import application from "./reducers/application";
import chat from "./reducers/chat";
import profile from "./reducers/profile";
import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const rootReducer = combineReducers({ contacts, application, chat, profile });
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

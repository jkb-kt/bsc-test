import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { reducer as notes } from "./modules/notes";

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    notes,
  });

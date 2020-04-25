import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
  });
};

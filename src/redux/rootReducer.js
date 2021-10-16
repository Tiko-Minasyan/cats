import { combineReducers } from "redux";

import cats from "./cats/reducer";

export default function reducers(state, action) {
  return combineReducers({ cats })(state, action);
}

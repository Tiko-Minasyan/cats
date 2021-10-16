import { all } from "redux-saga/effects";

import cats from "./cats/saga";

export default function* rootSaga() {
  yield all([cats()]);
}

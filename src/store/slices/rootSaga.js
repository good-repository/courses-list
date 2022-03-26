import { all } from "redux-saga/effects";

import courses from "./courses/saga";

export default function* rootSaga() {
  return yield all([courses]);
}

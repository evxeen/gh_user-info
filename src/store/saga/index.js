import { all } from "redux-saga/effects";
import { userWatcher } from "./getUserSaga";
import { reposWatcher } from "./getReposSaga";

export function* rootSagas() {
  yield all([userWatcher(), reposWatcher()]);
}

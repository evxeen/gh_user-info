import { call, put, takeEvery } from "redux-saga/effects";
import {
  setLoadingAction,
  setMessageAction,
  setReposAction,
  setStateAction,
} from "../actions/actions";
import { GET_REPOS } from "../config";
import { fetchRepos } from "../../api/fetchProfile";

function* reposWorker(action) {
  try {
    yield put(setLoadingAction(true));
    const data = yield call(fetchRepos, action.payload);
    if (data.message === "Not Found") {
      yield put(setReposAction([]));
      yield put(setStateAction("nfRepos"));
      yield put(setLoadingAction(false));
      throw new Error("Repository list is empty");
    }
    yield put(setReposAction(data));
    yield put(setLoadingAction(false));
  } catch (e) {
    yield put(setMessageAction(e.message));
  }
}

export function* reposWatcher() {
  yield takeEvery(GET_REPOS, reposWorker);
}

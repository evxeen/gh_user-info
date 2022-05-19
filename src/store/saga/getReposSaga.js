import { call, put, takeEvery } from "redux-saga/effects";
import {
  setMessageAction,
  setReposAction,
  setStateAction,
} from "../actions/actions";
import { GET_REPOS } from "../config";
import { fetchRepos } from "../../api/fetchProfile";

function* reposWorker(action) {
  try {
    const data = yield call(fetchRepos, action.payload);
    if (data.length === 0) {
      yield put(setReposAction(data));
      yield put(setStateAction("nfRepos"));
      throw new Error("Repository list is empty");
    }
    yield put(setReposAction(data));
  } catch (e) {
    yield put(setMessageAction(e.message));
  }
}

export function* reposWatcher() {
  yield takeEvery(GET_REPOS, reposWorker);
}

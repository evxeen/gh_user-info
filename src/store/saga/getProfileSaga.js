import { put, call, takeEvery } from "redux-saga/effects";
import {
  setLoadingAction,
  setMessageAction,
  setStateAction,
  setUserAction,
  setReposAction,
} from "../actions/actions";
import { GET_USER } from "../config";
import { fetchUser } from "../../api/fetchProfile";

function* profileWorker(action) {
  try {
    yield put(setLoadingAction(true));
    const user = yield call(fetchUser, action.payload);
    if (user.message === "Not Found") {
      yield put(setUserAction(null));
      yield put(setStateAction("nfUser"));
      yield put(setLoadingAction(false));
      throw new Error("User not found");
    }
    const repos = yield call(fetchUser, action.payload, "/repos");
    if (repos.length === 0 || repos.message === "Not Found") {
      yield put(setReposAction([]));
      yield put(setStateAction("nfRepos"));
      yield put(setLoadingAction(false));
      throw new Error("Repository list is empty");
    }
    yield put(setUserAction(user));
    yield put(setReposAction(repos));
    yield put(setLoadingAction(false));
  } catch (e) {
    yield put(setMessageAction(e.message));
  }
}

export function* profileWatcher() {
  yield takeEvery(GET_USER, profileWorker);
}

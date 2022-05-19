import { put, call, takeEvery } from "redux-saga/effects";
import {
  setLoadingAction,
  setMessageAction,
  setStateAction,
  setUserAction,
} from "../actions/actions";
import { GET_USER } from "../config";
import { fetchUser } from "../../api/fetchProfile";

function* userWorker(action) {
  try {
    yield put(setLoadingAction(true));
    const data = yield call(fetchUser, action.payload);
    if (data.message === "Not Found") {
      yield put(setUserAction(null));
      yield put(setStateAction("nfUser"));
      yield put(setLoadingAction(false));
      throw new Error("User not found");
    }
    yield put(setUserAction(data));
    yield put(setLoadingAction(false));
  } catch (e) {
    yield put(setMessageAction(e.message));
  }
}

export function* userWatcher() {
  yield takeEvery(GET_USER, userWorker);
}

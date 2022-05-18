import { put, call, takeEvery } from "redux-saga/effects";
import { setUserAction } from "../actions/profileActions";
import { GET_USER } from "../config";
import { fetchUser } from "../../api/fetchProfile";

function* userWorker(action) {
  const { data } = yield call(fetchUser, action.payload);
  yield put(setUserAction(data));
}

export function* userWatcher() {
  yield takeEvery(GET_USER, userWorker);
}

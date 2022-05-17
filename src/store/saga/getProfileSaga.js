import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { setUserAction } from "../actions/profileActions";

const fetchDataJson = () => axios.get("https://api.github.com/users/evxeen");

function* profileWorker() {
  const { data } = yield call(fetchDataJson);
  yield put(setUserAction(data));
}

export function* profileWatcher() {
  yield takeEvery("GET_PROFILE", profileWorker);
}

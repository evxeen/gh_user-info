import { put, call, takeEvery } from "redux-saga/effects";
import { setMessageAction, setUserAction } from "../actions/profileActions";
import { GET_USER } from "../config";
import { fetchUser } from "../../api/fetchProfile";

function* userWorker(action) {
  try {
    const data = yield call(fetchUser, action.payload);
    if (data.message === "Not Found") {
      throw new Error("User not found");
    }
    yield put(setUserAction(data));
  } catch (e) {
    yield put(setMessageAction(e.message));
  }
}

export function* userWatcher() {
  yield takeEvery(GET_USER, userWorker);
}

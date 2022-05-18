import { call, put, takeEvery } from "redux-saga/effects";
import { setReposAction } from "../actions/profileActions";
import { GET_REPOS } from "../config";
import { fetchRepos } from "../../api/fetchProfile";

function* reposWorker(action) {
  const { data } = yield call(fetchRepos, action.payload);
  yield put(setReposAction(data));
}

export function* reposWatcher() {
  yield takeEvery(GET_REPOS, reposWorker);
}

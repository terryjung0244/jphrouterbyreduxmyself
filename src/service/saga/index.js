import { all } from "redux-saga/effects";
import { jphSagaWatcher } from "../../redux/jphSaga";

export default function* rootSaga() {
  yield all([jphSagaWatcher()]);
}

import { takeLatest, put, select } from "redux-saga/effects";
import { JPH_CONST_STRING } from "../service/const/actionConst";

const { GET_JPH_USERS_REQUEST } = JPH_CONST_STRING;

const getJphUsersRequestfromSaga = () => {
  console.log("saga");
};

export function* jphSagaWatcher() {
  yield takeLatest(GET_JPH_USERS_REQUEST, getJphUsersRequestfromSaga);
}

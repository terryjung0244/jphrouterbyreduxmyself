import { takeLatest, put, select } from "redux-saga/effects";
import { JPH_CONST_STRING } from "../service/const/actionConst";
import { getJphUsersSuccessAction, getJphUsersFailureAction, getJphUserByNameSuccessAction, getJphUserByNameFailureAction } from "./jphAction";

const { GET_JPH_USERS_REQUEST, GET_JPH_POSTS_BY_USER_NAME_REQUEST } = JPH_CONST_STRING;

function* getJphUsersRequestFromSaga(action) {
  //function* 까먹지 않기

  let endpoint = "/users";
  // console.log(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`);
  let response = yield fetch(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`);
  let data = yield response.json();
  if (data) {
    yield put(getJphUsersSuccessAction(data));
  } else {
    yield put(getJphUsersFailureAction("Failed"));
  }
}

function* getJphUserByNameRequestFromSaga(action) {
  console.log(action.payload);
  let endpoint = `/posts?userName=${action.payload.Name}`; //여기가 결국 이름이 붙는건가?...
  console.log(endpoint);
}

export function* jphSagaWatcher() {
  yield takeLatest(GET_JPH_USERS_REQUEST, getJphUsersRequestFromSaga);
  yield takeLatest(GET_JPH_POSTS_BY_USER_NAME_REQUEST, getJphUserByNameRequestFromSaga);
}

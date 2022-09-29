import { JPH_CONST_STRING } from "../service/const/actionConst";

const { GET_JPH_USERS_REQUEST, GET_JPH_USERS_SUCCESS, GET_JPH_USERS_FAILURE } = JPH_CONST_STRING;

const initialState = {
  data: null,
};

export default function jphReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JPH_USERS_REQUEST:
      console.log("123");
      return state;

    case GET_JPH_USERS_SUCCESS:
      console.log("456");
      return state;

    case GET_JPH_USERS_FAILURE:
      console.log("678");
      return state;

    default:
      return state;
  }
}

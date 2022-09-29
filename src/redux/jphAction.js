import { JPH_CONST_STRING } from "../service/const/actionConst";

const { GET_JPH_USERS_REQUEST, GET_JPH_USERS_SUCCESS, GET_JPH_USERS_FAILURE } = JPH_CONST_STRING;

export const getJphUsersRequestAction = () => {
  return {
    type: GET_JPH_USERS_REQUEST,
  };
};

export const getJphUsersSuccessAction = () => {
  return {
    type: GET_JPH_USERS_SUCCESS,
  };
};

export const getJphUsersFailureAction = () => {
  return {
    type: GET_JPH_USERS_FAILURE,
  };
};

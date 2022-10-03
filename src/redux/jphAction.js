import { JPH_CONST_STRING } from "../service/const/actionConst";

const {
  GET_JPH_USERS_REQUEST,
  GET_JPH_USERS_SUCCESS,
  GET_JPH_USERS_FAILURE,
  GET_JPH_POSTS_BY_USER_NAME_REQUEST,
  GET_JPH_POSTS_BY_USER_NAME_SUCCESS,
  GET_JPH_POSTS_BY_USER_NAME_FAILURE,
} = JPH_CONST_STRING;

export const getJphUsersRequestAction = () => {
  return {
    type: GET_JPH_USERS_REQUEST,
  };
};

export const getJphUsersSuccessAction = (apiSuccess) => {
  return {
    type: GET_JPH_USERS_SUCCESS,
    payload: apiSuccess,
  };
};

export const getJphUsersFailureAction = (apiFailure) => {
  return {
    type: GET_JPH_USERS_FAILURE,
    payload: apiFailure,
  };
};

export const getJphUserByNameRequestAction = (userName) => {
  return {
    type: GET_JPH_POSTS_BY_USER_NAME_REQUEST,
    payload: userName,
  };
};

export const getJphUserByNameSuccessAction = (apiSuccess) => {
  return {
    type: GET_JPH_POSTS_BY_USER_NAME_SUCCESS,
    payload: apiSuccess,
  };
};

export const getJphUserByNameFailureAction = (apiFailure) => {
  return {
    type: GET_JPH_POSTS_BY_USER_NAME_FAILURE,
    payload: apiFailure,
  };
};

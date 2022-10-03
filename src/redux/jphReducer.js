import { JPH_CONST_STRING } from "../service/const/actionConst";

const {
  GET_JPH_USERS_REQUEST,
  GET_JPH_USERS_SUCCESS,
  GET_JPH_USERS_FAILURE,
  GET_JPH_POSTS_BY_USER_NAME_REQUEST,
  GET_JPH_POSTS_BY_USER_NAME_SUCCESS,
  GET_JPH_POSTS_BY_USER_NAME_FAILURE,
} = JPH_CONST_STRING;

const initialState = {
  jphData: {
    users: [],
    posts: [],
    loading: false,
  },
};

export default function jphReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JPH_USERS_REQUEST:
      return {
        ...state,
        // jphData: {
        //   ...state.jphData,
        //   // data: null,
        //   // loading: false, 요기 부분 이해가 안감.
        // }
      };

    case GET_JPH_USERS_SUCCESS:
      return {
        ...state,
        jphData: {
          ...state.jphData,
          users: action.payload,
        },
      };

    case GET_JPH_USERS_FAILURE:
      return {
        ...state,
      };

    case GET_JPH_POSTS_BY_USER_NAME_REQUEST:
      return {
        ...state,
        jphData: {
          ...state.jphData,
          posts: [],
        },
      };

    case GET_JPH_POSTS_BY_USER_NAME_SUCCESS:
      return {
        ...state,
        jphData: {
          ...state.jphData,
          posts: action.payload,
          loading: false,
        },
      };

    case GET_JPH_POSTS_BY_USER_NAME_FAILURE:
      return {
        ...state,
        jphData: {
          ...state.jphData,
          posts: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
}

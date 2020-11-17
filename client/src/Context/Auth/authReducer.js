import {
  LOGIN,
  LOAD_USER,
  LOGOUT,
  SET_ERROR,
  CLEAR_ERROR,
  LOGMEIN,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload, isAuthenticated: true };
    case LOAD_USER:
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
      };
    case LOGOUT:
      return { ...state, token: null, isAuthenticated: false };
    case SET_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    case LOGMEIN:
      return { ...state, loggedIn: true };
    default:
      return { ...state };
  }
};

export default authReducer;

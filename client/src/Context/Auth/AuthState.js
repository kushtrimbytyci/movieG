import React, { useReducer } from "react";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";
import { LOGIN, SET_ERROR, LOAD_USER, LOGOUT, CLEAR_ERROR,LOGMEIN } from "../types";
import defaultHeader from "../../helpers/axiosDefault";


const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    error: "",
    loggedIn:false
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (form) => {
    try {
      const data = await axios.post("/api/login", form);
      defaultHeader(data.data.token);
      loadUser(data.data.token);
      localStorage.setItem("token", data.data.token);
      dispatch({ type: LOGIN, payload: data.data.token });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.data.error.error });
      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 1000);
    }
  };

  const loadUser = async (token) => {
    if (token || localStorage.getItem("token")) {
      defaultHeader(token || localStorage.getItem("token")); //!Sepse kur te boj refresh une faqen, defaultHeaderat hupin
      try {
        await axios.get("/api/me");
        dispatch({ type: LOAD_USER });
      } catch (error) {
      }
    }
  };

  const logout = () => {
    localStorage.clear("token");
    dispatch({ type: LOGOUT });
    

  };

  const setError = (error) => {
    dispatch({ type: SET_ERROR, payload: error });
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR });
    }, 3000);
  };
  const logmein = ()=>{
    dispatch({type:LOGMEIN})
  }

  return (
    <AuthContext.Provider
      value={{ ...state, login, loadUser, logout, setError,logmein }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

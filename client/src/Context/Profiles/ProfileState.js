import React, { useReducer } from "react";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";
import { SET_PROFILE, CLEAR_PROFILE,CHANGE_BACKGROUND,CHANGE_TOGGLE } from "../types";

const ProfileState = (props) => {
  const initialState = {
    profiles: null,
    backgroundColor:'rgb(232,235,245)',
    toggle:false
  };
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const setProfile = (profiless) => {
    dispatch({ type: SET_PROFILE, payload: profiless });
  };

  const clearProfile = () => {
    dispatch({ type: CLEAR_PROFILE });
  };
  const changeBackground = (color)=>{
    dispatch({type:CHANGE_BACKGROUND,payload:color})
  }
  const changeToggle = ()=>{
    dispatch({type:CHANGE_TOGGLE})
  }
  return (
    <ProfileContext.Provider
      value={{ ...state, setProfile, clearProfile,changeBackground,changeToggle }}
    >{props.children}</ProfileContext.Provider>
  );
};

export default ProfileState;

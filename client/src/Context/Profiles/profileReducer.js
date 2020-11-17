import {
  SET_PROFILE,
  CLEAR_PROFILE,
  CHANGE_BACKGROUND,
  CHANGE_TOGGLE,
} from "../types";

const profileReducer = (state, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, profiles: action.payload };
    case CLEAR_PROFILE:
      return { ...state, profiles: null };
    case CHANGE_BACKGROUND:
      return { ...state, backgroundColor: action.payload };
    case CHANGE_TOGGLE:
      return { ...state, toggle: !state.toggle };

    default:
      return { ...state };
  }
};

export default profileReducer;

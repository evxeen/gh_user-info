import { SET_USER, SET_REPOS, SET_STATE, SET_MESSAGE } from "../config";

const initialState = {
  user: null,
  repositories: [],
  stateApp: "initial",
  message: "Start with searching a GitHub user",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_REPOS:
      return { ...state, repositories: action.payload };
    case SET_STATE:
      return { ...state, stateApp: action.payload };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

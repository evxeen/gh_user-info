import { SET_REPOS, SET_USER } from "../config";

const initialState = {
  user: {},
  repositories: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_REPOS:
      return { ...state, repositories: [...action.payload] };
    default:
      return state;
  }
};

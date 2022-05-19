import {
  GET_REPOS,
  GET_USER,
  SET_MESSAGE,
  SET_REPOS,
  SET_USER,
} from "../config";

export const getUserAction = (payload) => ({
  type: GET_USER,
  payload: payload,
});

export const getReposAction = (payload) => ({
  type: GET_REPOS,
  payload: payload,
});
export const setUserAction = (payload) => ({
  type: SET_USER,
  payload: payload,
});

export const setReposAction = (payload) => ({
  type: SET_REPOS,
  payload: payload,
});

export const setMessageAction = (payload) => ({
  type: SET_MESSAGE,
  payload: payload,
});

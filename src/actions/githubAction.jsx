import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  ERROR
} from "./types";
import axios from "axios";

//search users
export const searchUsers = text => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://api.github.com/search/users?q=" + text + "location:bangalore"
      );

      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      });
    } catch (err) {
      dispatch({
        type: ERROR
      });
    }
  };
};
//get a single user details
export const getUser = username => {
  return async dispatch => {
    try {
      const res = await axios.get("https://api.github.com/users/" + username);
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ERROR
      });
    }
  };
};

//get users repos
export const getUserRepos = username => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://api.github.com/users/" +
          username +
          "/repos?per_page=5&sort=created:asc"
      );
      dispatch({
        type: GET_REPOS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ERROR
      });
    }
  };
};

import axios from "axios";

export const fetchUser = (user) =>
  axios.get(`https://api.github.com/users/${user}`);

export const fetchRepos = (user) =>
  axios.get(`https://api.github.com/users/${user}/repos`);

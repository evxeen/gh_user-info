export const fetchUser = (user, repos = "") => {
  return fetch(`https://api.github.com/users/${user}${repos}`).then((data) =>
    data.json()
  );
};

// export const fetchRepos = (user) => {
//   return fetch(`https://api.github.com/users/${user}/repos`).then((data) =>
//     data.json()
//   );
// };

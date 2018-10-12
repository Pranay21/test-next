export const fetchGhRepos = ghUsername => {
  return fetch(`https://api.github.com/users/${ghUsername}/repos`)
    .then(res => res.json())
    .catch(e => {
      throw new Error("Sorry...");
    });
};

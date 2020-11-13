export const ADD_USER_SEARCH_RESULT = "ADD_USER_SEARCH_RESULT";
export const ADD_REPO_SEARCH_RESULT = "ADD_REPO_SEARCH_RESULT";
export const ADD_COMMIT_RESULT = "ADD_COMMIT_RESULT";

export function handleUserSearch(user) {
  const url = `https://api.github.com/users/${user}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        // console.log("user", user);
        dispatch(addUserSearchResult(user));
      });
  };
}

export function handleRepoSearch(user) {
  const url = `https://api.github.com/users/${user}/repos`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((repos) => {
        // console.log("repos", repos);
        dispatch(addRepoSearchResult(repos));
      });
  };
}
export function addRepoSearchResult(repos) {
  return {
    type: ADD_REPO_SEARCH_RESULT,
    repos,
  };
}

export function addUserSearchResult(user) {
  return {
    type: ADD_USER_SEARCH_RESULT,
    user,
  };
}

export function getCommitCount(repo, user) {
  const url = `https://api.github.com/repos/${user.login}/${repo.name}/contributors`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((commits) => {
        // console.log("commits", commits);
        dispatch(addCommitsResult(commits));
      });
  };
}

export function addCommitsResult(commits) {
  return {
    type: ADD_COMMIT_RESULT,
    commits,
  };
}

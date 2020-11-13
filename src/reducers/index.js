import {
  ADD_COMMIT_RESULT,
  ADD_REPO_SEARCH_RESULT,
  ADD_USER_SEARCH_RESULT,
} from "../actions";
import { combineReducers } from "redux";

const initialSearchState = {
  result: {},
  repoResult: [],
  commitResult: [],
  showSearchResults: false,
};

export function searchUser(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_USER_SEARCH_RESULT:
      return {
        ...state,
        result: action.user,
        showSearchResults: false,
      };
    case ADD_REPO_SEARCH_RESULT:
      return {
        ...state,
        repoResult: action.repos,
        showSearchResults: false,
      };
    case ADD_COMMIT_RESULT:
      return {
        ...state,
        commitResult: action.commits,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

export default combineReducers({
  searchUser: searchUser,
});

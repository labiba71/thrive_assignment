import { USER_LOGIN, GET_REPO_LIST } from "./Type";

export const userLogin = () => async (dispatch) => {
  fetch("https://api.github.com/users/rakibtg")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: USER_LOGIN, payload: data });
    })
    .catch((err) => []);
};

export const getRepoList = () => async (dispatch) => {
  fetch(" https://api.github.com/users/rakibtg/repos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_REPO_LIST, payload: data });
    })
    .catch((err) => []);
};

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { USER_LOGIN, GET_REPO_LIST } from "./Type";

const persistConfig = {
  key: "rootReducer",
  storage,
};

const initialState = {
  user: {},
  repoList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case GET_REPO_LIST:
      return {
        ...state,
        repoList: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);

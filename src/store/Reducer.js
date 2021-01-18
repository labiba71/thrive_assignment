import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { USER_LOGIN, GET_REPO_LIST, EDIT_EMAIL, EDIT_PASSWORD } from "./Type";

const persistConfig = {
  key: "rootReducer",
  storage,
};

const initialState = {
  user: {
    emai: "",
    id: "",
  },
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
    case EDIT_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
    case EDIT_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload,
        },
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, rootReducer);

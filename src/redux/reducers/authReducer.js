import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  firstName: "",
  email: "",
  accessToken: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "REGISTER":
      return action.payload;
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

const authPersistConfig = {
  storage,
  key: "auth",
};

export default persistReducer(authPersistConfig, auth);

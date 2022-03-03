import { combineReducers } from "redux";
import app from "./appReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  app,
  auth,
});

export default rootReducer;

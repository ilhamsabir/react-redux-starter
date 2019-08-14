import { combineReducers } from "redux";
import user from "./userReducers";
import userjob from "./userJobReducer";

export default combineReducers({
  user, userjob
});
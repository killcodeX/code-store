import { combineReducers } from "redux";
import { CodeReducer } from "./postReducer";

export default combineReducers({
  post: CodeReducer,
});


import { combineReducers } from "redux";
import quizzReducer from "./quizzReducer";

export default combineReducers({
  questions:quizzReducer,
});

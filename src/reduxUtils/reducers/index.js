import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseProgressReducer from "./courseProgressReducer";
import courseReducer from "./courseReducer";
import lessonReducer from "./lessonReducer";
import sectionReducer from "./sectionReducer";

export default combineReducers({
  courseData: courseReducer,
  authData: authReducer,
  sectionData: sectionReducer,
  lessonData: lessonReducer,
  courseProgressData: courseProgressReducer,
});

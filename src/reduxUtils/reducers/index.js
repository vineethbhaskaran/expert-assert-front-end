import { combineReducers } from "redux";
import { attandCourseCurrentPage } from "../actions/attendCourseAction";
import attendCourseReducer from "./attendCourseReducer";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import lessonReducer from "./lessonReducer";
import sectionReducer from "./sectionReducer";

export default combineReducers({
  courseData: courseReducer,
  authData: authReducer,
  sectionData: sectionReducer,
  lessonData: lessonReducer,
  courseProgress: attendCourseReducer,
});

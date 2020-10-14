import { CREATE_LESSON, FETCH_LESSON_BY_COURSE_SECTION, SET_CURRENT_LESSON } from "./type";
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper";

export const fetchLessonByCourseSection = (courseId, sectionId) => (dispatch) => {
  authAxios
    .get(config.LESSON_URL, { params: { courseId: courseId, sectionId: sectionId } })
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: FETCH_LESSON_BY_COURSE_SECTION,
        payload: httpResponse.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createLesson = (lessonRequest) => (dispatch) => {
  authAxios
    .post(config.LESSON_URL, lessonRequest)
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: CREATE_LESSON,
        payload: httpResponse.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setCurrentLesson = (currentLesson) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_LESSON,
    payload: currentLesson,
  });
};

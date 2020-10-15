import { CREATE_LESSON, FETCH_LESSON_BY_COURSE_SECTION, SET_CURRENT_LESSON, UPDATE_LESSON_CONTENTS } from "./type";
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
        payload: lessonRequest,
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

export const updateLesson = (lessonRequest) => (dispatch) => {
  const UPDATE_LESSON_URL = config.LESSON_URL + lessonRequest._id;
  authAxios
    .put(UPDATE_LESSON_URL, lessonRequest)
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: UPDATE_LESSON_CONTENTS,
        payload: lessonRequest,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

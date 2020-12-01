import { CREATE_COURSE, FETCH_COURSES, FETCH_COURSE_DETAIL } from "./type";
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper";

export const fetchCourses = () => (dispatch) => {
  authAxios
    .get(config.GET_ALL_COURSES_URL)
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: FETCH_COURSES,
        payload: httpResponse.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const fetchCourseDetail = (courseId) => (dispatch) => {
  authAxios
    .get(config.GET_ALL_COURSES_URL + courseId)
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: FETCH_COURSE_DETAIL,
        payload: httpResponse,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createCourse = (courseRequest) => (dispatch) => {
  authAxios
    .post(config.GET_ALL_COURSES_URL, courseRequest)
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: CREATE_COURSE,
        payload: httpResponse.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

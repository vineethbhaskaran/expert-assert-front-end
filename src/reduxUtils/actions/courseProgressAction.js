import { ATTEND_COURSE_CURRENT_PAGE } from "./type";
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper";

export const getAttendCourseCurrentPageContents = (courseId) => (dispatch) => {
  authAxios
    .get(config.COURSE_PROGRESS, { params: { courseId: courseId } })
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: ATTEND_COURSE_CURRENT_PAGE,
        payload: httpResponse,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

import { FETCH_SECTION_BY_COURSE, CREATE_SECTION } from "./type";
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper";

export const fetchSectionsByCourse = (courseId) => (dispatch) => {
  authAxios
    .get(config.SECTION_URL, { params: { courseId: courseId } })
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: FETCH_SECTION_BY_COURSE,
        payload: httpResponse.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createSection = (sectionRequest) => (dispatch) => {
  authAxios
    .post(config.SECTION_URL, sectionRequest)
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: CREATE_SECTION,
        payload: httpResponse.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

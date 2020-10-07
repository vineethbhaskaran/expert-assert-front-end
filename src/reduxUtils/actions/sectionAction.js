import { FETCH_SECTION_BY_COURSE } from './type';
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper"

export const fetchSectionsByCourse = (courseId) => dispatch => {
    authAxios
    .get(config.SECTION_URL,{ params: { courseId: courseId } })
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: FETCH_SECTION_BY_COURSE,
        payload: httpResponse.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
};




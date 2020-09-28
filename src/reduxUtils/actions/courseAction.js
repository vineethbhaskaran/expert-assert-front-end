import { FETCH_COURSES } from './type';
import * as config from "../../config";
import authAxios from "../../helpers/AuthHelper"

export const fetchCourses = () => dispatch => {
    authAxios
    .get(config.GET_ALL_COURSES_URL)
    .then((response) => {
      let httpResponse = response.data;
      dispatch({
        type: FETCH_COURSES,
        payload: httpResponse.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
};



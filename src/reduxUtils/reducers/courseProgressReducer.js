import { ATTEND_COURSE_CURRENT_PAGE } from "../actions/type";

const initialState = {
  attendCourseCurrentPage: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ATTEND_COURSE_CURRENT_PAGE:
      return {
        ...state,
        attendCourseCurrentPage: action.payload,
      };

    default:
      return state;
  }
}

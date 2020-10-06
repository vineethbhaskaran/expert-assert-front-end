import { CREATE_COURSE, FETCH_COURSES,FETCH_COURSE_DETAIL } from "../actions/type";

const initialState = {
  courses: [],
  course: {},
  courseDetail:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case CREATE_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    case FETCH_COURSE_DETAIL:
      return {
        ...state,
        courseDetail: action.payload,
      };

    default:
      return state;
  }
}

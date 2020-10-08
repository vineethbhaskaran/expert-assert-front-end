import { FETCH_LESSON_BY_COURSE_SECTION } from "../actions/type";

const initialState = {
  lessons: [],
  lesson: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LESSON_BY_COURSE_SECTION:
      return {
        ...state,
        lessons: action.payload,
      };
    default:
      return state;
  }
}

import { CREATE_LESSON, FETCH_LESSON_BY_COURSE_SECTION, SET_CURRENT_LESSON } from "../actions/type";

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
    case CREATE_LESSON:
      return {
        ...state,
        lesson: action.payload,
      };
    case SET_CURRENT_LESSON:
      return {
        ...state,
        lesson: action.payload,
      };
    default:
      return state;
  }
}

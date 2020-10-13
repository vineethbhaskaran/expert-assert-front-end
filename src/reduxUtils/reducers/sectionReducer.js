import { CREATE_SECTION, FETCH_SECTION_BY_COURSE, SET_CURRENT_SECTION } from "../actions/type";

const initialState = {
  sections: [],
  section: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SECTION_BY_COURSE:
      return {
        ...state,
        sections: action.payload,
      };
    case CREATE_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    case SET_CURRENT_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    default:
      return state;
  }
}

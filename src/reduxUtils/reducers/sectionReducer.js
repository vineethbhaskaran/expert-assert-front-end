import {FETCH_SECTION_BY_COURSE } from "../actions/type";

const initialState = {
  sections: [],
  section: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SECTION_BY_COURSE:
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
}

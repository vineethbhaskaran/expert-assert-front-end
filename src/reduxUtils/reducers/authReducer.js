import { LOGGEDIN_USER } from '../actions/type';

const initialState = {
  isLoggedIn:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGEDIN_USER:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    
   
    default:
      return state;
  }
}

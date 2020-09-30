import { LOGGEDIN_USER } from './type';

export const storeLoggedInInfo = (loggedInInfo) => dispatch => {
    dispatch({
        type: LOGGEDIN_USER,
        payload: loggedInInfo
      })
};
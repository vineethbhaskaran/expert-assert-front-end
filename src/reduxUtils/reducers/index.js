import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courseReducer from './courseReducer';
import sectionReducer from './sectionReducer';

export default combineReducers({
    courseData:courseReducer,
    authData:authReducer,
    sectionData:sectionReducer
});
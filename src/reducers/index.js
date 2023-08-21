import { combineReducers } from 'redux';
import usersReducer from './users';
import questionsReducer from './questions';
import authedUserReducer from './authedUser';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({users:usersReducer, questions:questionsReducer, authedUser:authedUserReducer, loadingBar:loadingBarReducer});
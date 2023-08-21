import { _getUsers } from "../utils/_DATA";

// types of actions
export const GET_USERS = "GET_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const SET_USER_ANSWER = "SET_USER_ANSWER";
export const REMOVE_USER_ANSWER = "REMOVE_USER_ANSWER";

// action creators
export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    };
}

export function setUserAnswer(answer, question_id, authedUser) {
    return {
        type: SET_USER_ANSWER,
        answer,
        question_id,
        authedUser,
    };
}

export function removeUserAnswer(question_id, authedUser) {
    return {
        type: REMOVE_USER_ANSWER,
        question_id,
        authedUser,
    };
}


// thunks action creators
export const handleInitialData_Users = () => (dispatch) => {
    return _getUsers().then((users) => {
        dispatch(getUsers(users));
    });
}

export function handleSetUserAnswer(question_id, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        if (answer !== "") dispatch(setUserAnswer(answer, question_id, authedUser));
        else dispatch(removeUserAnswer(question_id, authedUser));
    };
}



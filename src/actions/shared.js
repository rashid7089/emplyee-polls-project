import { handleInitialData_Questions } from "./questions";
import { handleInitialData_Users } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";

// action types
export const ADD_VOTE = "ADD_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION";

// action creater
export const createNewQuestion = (question) => {
    return {
        type: CREATE_NEW_QUESTION,
        question,
    };
}

export function addQuestionVote(authedUser, question_id, answer) {
    return {
        type: ADD_VOTE,
        authedUser,
        question_id,
        answer,
    };
}

export function removeQuestionVote(authedUser, question_id) {
    return {
        type: REMOVE_VOTE,
        authedUser,
        question_id,
        answer:""
    };
}

// thunks action creators
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([dispatch(handleInitialData_Users()), dispatch(handleInitialData_Questions())])
        .catch((e) => {
            console.log("Error loading initial data", e);
        }).finally(() => dispatch(hideLoading()));
    }
}

export function handleSaveQuestionAnswer(authedUser, question_id, answer) {
    return (dispatch) => {
        dispatch(addQuestionVote(authedUser, question_id, answer));
        return _saveQuestionAnswer({ authedUser, question_id, answer }).catch((e) => {
            alert("Error saving question answer, please try again");
            dispatch(removeQuestionVote(authedUser, question_id));
        });
    }
}

export const handleCreateNewQuestion = (authedUser, optionOneText, optionTwoText) => (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser,
    }).then((question) => {
        dispatch(createNewQuestion(question));
    }).catch((e) => {
        console.log("----------- error creating new question", e);
        alert(e);
    }
    ).finally(() => {
        dispatch(hideLoading());
    });
}
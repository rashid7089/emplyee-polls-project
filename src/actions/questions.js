import { _getQuestions } from "../utils/_DATA";

// types of actions
export const GET_QUESTIONS = "GET_QUESTIONS";

// action creators
export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    };
}

// thunks action creators
export const handleInitialData_Questions = () => (dispatch) => {
    return _getQuestions().then((questions) => {
        dispatch(getQuestions(questions));
    });
}



import { GET_QUESTIONS } from '../actions/questions';
import { ADD_VOTE, CREATE_NEW_QUESTION, REMOVE_VOTE } from '../actions/shared';

function questionsReducer (state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return action.questions;
        case CREATE_NEW_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case ADD_VOTE:
            return {
                ...state,
                [action.question_id]: {
                    ...state[action.question_id],
                    [action.answer]: {
                        ...state[action.question_id][action.answer],
                        votes: state[action.question_id][action.answer].votes.concat([action.authedUser]),
                    }
                }
            };
            case REMOVE_VOTE: // only used for redux incase of error saving to db
                return {
                    ...state,
                    [action.question_id]: {
                        ...state[action.question_id],
                        [action.answer]: {
                            ...state[action.question_id][action.answer],
                            votes: state[action.question_id][action.answer].votes.filter((user) => user !== action.authedUser),
                        }
                    }
                };

        default:
            return state;
    }
}

export default questionsReducer;
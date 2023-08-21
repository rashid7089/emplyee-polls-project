import { ADD_VOTE, CREATE_NEW_QUESTION, REMOVE_VOTE } from '../actions/shared';
import { GET_USERS, SET_USER_ANSWER, REMOVE_USER_ANSWER } from '../actions/users';

function usersReducers(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;

    case ADD_VOTE:
    case SET_USER_ANSWER:
        return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.question_id]: action.answer,
                },
            }
        }
    
    case REMOVE_VOTE: // only used for redux incase of error saving to db
        return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: Object.fromEntries(Object.entries(state[action.authedUser].answers)
                .filter(([qid]) => qid !== action.question_id))
            }
        }
    case CREATE_NEW_QUESTION:
        return {
            ...state,
            [action.question.author]: {
                ...state[action.question.author],
                questions: state[action.question.author].questions.concat([action.question.id]),
            }
        };
    case REMOVE_USER_ANSWER:
        const { [action.question_id]: USELESS, ...newAnswers } = state[action.authedUser].answers;
        return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: newAnswers,
            }
        }
    default:
      return state;
  }
}

export default usersReducers;
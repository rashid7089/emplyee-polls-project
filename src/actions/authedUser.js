// types of actions
export const SET_AUTHED_USER = "SET_AUTHED_USER";

// action creators
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
}
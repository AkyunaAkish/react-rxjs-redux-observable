import { SEARCH_USERS, SET_SEARCHING, RECEIVE_USERS, CLEAR_USERS } from './types';

export function searchUsers(user) {
    return {
        type: SEARCH_USERS,
        payload: {
            user
        }
    };
}

export function setSearching(bool) {
    return {
        type: SET_SEARCHING,
        payload: {
            bool
        }
    };
}

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        payload: { users }
    };
}

export function receiveUsersAndEndSpinner(users) {
    return (dispatch) => {
        dispatch(receiveUsers(users));
        dispatch(setSearching(false));
    };
}

export function clearUsers() {
    return {
        type: CLEAR_USERS
    };
}
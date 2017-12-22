import { SEARCH_USERS, RECEIVE_USERS, CLEAR_USERS } from './types';

export function searchUsers(user) {
    return {
        type: SEARCH_USERS,
        payload: {
            user
        }
    };
}

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        payload: { users }
    };
}

export function clearUsers() {
    return {
        type: CLEAR_USERS
    };
}
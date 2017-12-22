import { SET_SEARCHING, RECEIVE_USERS, CLEAR_USERS } from '../actions/types';

const initialState = {
    users: [],
    isSearching: false
};

export default function userResults(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCHING:
            return { ...state, isSearching: action.payload.bool };

            case RECEIVE_USERS:
            return { ...state, users: action.payload.users };

        case CLEAR_USERS:
            return initialState;

        default:
            return state;
    }
}
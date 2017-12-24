import { SET_SEARCHING, RECEIVE_USERS, CLEAR_USERS } from '../actions/types';

const initialState = {
    users: [],
    isSearching: false,
    hasSearched: false
};

export default function userResults(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCHING:
            return { ...state, isSearching: action.payload.bool, hasSearched: true };

            case RECEIVE_USERS:
            return { ...state, users: action.payload.users };

        case CLEAR_USERS:
            return { ...initialState, hasSearched: state.hasSearched ? true : false };

        default:
            return { ...state, hasSearched: state.hasSearched ? true : false };
    }
}
import { RECEIVE_USERS, CLEAR_USERS } from '../actions/types';

const initialState = [];

export default function userResults(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            console.log('receive in reducer', action);
            return action.payload.users;

        case CLEAR_USERS:
            console.log('clear in reducer', action);
            return initialState;

        default:
            return state;
    }
}
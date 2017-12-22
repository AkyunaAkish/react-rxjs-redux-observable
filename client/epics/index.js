import { combineEpics } from 'redux-observable';
import githubUsers from './githubUsers';

export default combineEpics(
    githubUsers
);
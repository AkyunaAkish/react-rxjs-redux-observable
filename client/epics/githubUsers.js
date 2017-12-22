import { SEARCH_USERS, RECEIVE_USERS, CLEAR_USERS } from '../actions/types';
import { receiveUsers } from '../actions';

import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

export default function searchUsers(action$) {
    return action$.ofType(SEARCH_USERS)
                  .map(action => action.payload.user) // transform into array
                  .filter(user => !!user) // only accept truthy user query
                  .switchMap(user => { // using switchMap allows to create an observable/observables and potentially cancel in-flight requests
                      return Observable.timer(800) // debounce to only allow one call per 800 milliseconds
                                       .takeUntil(action$.ofType(CLEAR_USERS)) // if clear users is called, cancel the API call/current observable
                                       .concatMap(() => ajax.getJSON(`https://api.github.com/search/users?q=${user}`)
                                                           .map(res => res.items) // put all data into one array
                                                           .map(receiveUsers) // take array of users and dispatch receiveUsers action to place array into reducer
                                                 ).retry(3) // retry up to 3 times if errors occur when making the call to github;
                  });
};
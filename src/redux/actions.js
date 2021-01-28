import { FETCH_USERS, FETCH_TWEETS } from './types';

export function fetchUsers() {
  return async (dispatch) => {
    const response = await fetch('http://domer.tech:9999/users/');
    const json = await response.json();
    dispatch({
      type: FETCH_USERS,
      payload: json,
    });
  };
}

export function fetchTweets() {
  return async (dispatch) => {
    const response = await fetch('http://domer.tech:9999/tweets/');
    const json = await response.json();
    dispatch({
      type: FETCH_TWEETS,
      payload: json,
    });
  };
}

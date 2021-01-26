import { FETCH_USERS } from './types';

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

import { FETCH_TWEETS } from './types';

const initialState = {
  tweets: {
    data: [],
  },
};

export const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
};

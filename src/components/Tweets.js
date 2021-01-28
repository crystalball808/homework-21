import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets, fetchUsers } from '../redux/actions';
import Tweet from './Tweet';

const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets.data);
  const users = useSelector((state) => state.users.users.data);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {tweets.map((tweet) => {
        const user = users.find((user) => user.id === tweet.userId);
        return <Tweet user={user} tweet={tweet} />;
      })}
    </div>
  );
};

export default Tweets;
